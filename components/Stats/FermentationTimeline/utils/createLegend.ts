import * as d3 from 'd3';
import { IntlShape } from 'react-intl';

import { FermentationTimelineBar } from 'utils/types/Beverage';
import specificStyles from '../FermentationTimeline.module.css';
import { Sizes } from './Sizes';

type Props = {
  data: FermentationTimelineBar[];
  intl: IntlShape;
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

enum Types {
  top = 'top',
  bottom = 'bottom',
  spontaneous = 'spontaneous',
}

const createLegend = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const types = Object.values(Types);
  const { height, margin, width } = sizes.legend;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const legend = svg
    .append('g')
    .attr('data-attr', 'legend')
    .classed('legend', true)
    .attr(
      'transform',
      `translate(${margin.left}, ${sizes.chart.height + margin.top})`,
    );

  const legendGroups = legend
    .selectAll('g')
    .data(types)
    .enter()
    .append('g')
    .attr('class', name => name);

  legendGroups
    .append('circle')
    .attr('cx', innerHeight / 2)
    .attr('cy', innerHeight / 2)
    .attr('r', innerHeight / 2)
    .attr('class', name => `line-path ${name}`);

  const legendWidth: {
    [name: string]: number;
  } = types.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: 0,
    }),
    {},
  );

  function translateLabels() {
    d3.select(`svg.${specificStyles.fermentationTimeline} g.legend g.top`).attr(
      'transform',
      `translate(${
        innerWidth -
        legendWidth.spontaneous -
        legendWidth.bottom -
        legendWidth.top
      }, 0)`,
    );

    d3.select(
      `svg.${specificStyles.fermentationTimeline} g.legend g.bottom`,
    ).attr(
      'transform',
      `translate(${
        innerWidth - legendWidth.spontaneous - legendWidth.bottom
      }, 0)`,
    );

    d3.select(
      `svg.${specificStyles.fermentationTimeline} g.legend g.spontaneous`,
    ).attr(
      'transform',
      `translate(${innerWidth - legendWidth.spontaneous}, 0)`,
    );
  }

  function getTextWidth(this: SVGTextElement, name: Types, i: number) {
    legendWidth[name] = this.getBBox().width + 80;
    if (i + 1 === types.length) {
      translateLabels();
    }
  }

  const getSum = (name: Types) => {
    switch (name) {
      case Types.top:
        return data.reduce((acc, { top }) => acc + top, 0);
      case Types.bottom:
        return data.reduce((acc, { bottom }) => acc + bottom, 0);
      case Types.spontaneous:
        return data.reduce((acc, { spontaneous }) => acc + spontaneous, 0);
      default:
        return 0;
    }
  };

  legendGroups
    .append('text')
    .attr('x', 50)
    .attr('y', innerHeight / 2 - 8)
    .attr('dominant-baseline', 'middle')
    .classed('label', true)
    .text(name => intl.formatMessage({ id: `stats.fermentation.${name}` }))
    .each(getTextWidth);

  legendGroups
    .append('text')
    .attr('x', 50)
    .attr('y', innerHeight / 2 + 8)
    .attr('dominant-baseline', 'middle')
    .text(getSum);
};

export default createLegend;
