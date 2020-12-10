import * as d3 from 'd3';
import { IntlShape } from 'react-intl';

import { AddTimelineBar } from 'utils/types/Beverage';
import { Sizes } from './Sizes';

type Props = {
  data: AddTimelineBar[];
  intl: IntlShape;
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

enum Types {
  total = 'total',
  bottles = 'bottles',
  cans = 'cans',
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
    .append('rect')
    .attr('width', innerHeight)
    .attr('height', innerHeight)
    .attr('class', name => `line-path ${name}`);

  legendGroups
    .append('rect')
    .attr('width', innerHeight)
    .attr('height', innerHeight)
    .attr('class', name => name);

  const legendWidth: any = types.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: 0,
    }),
    {},
  );

  function translateLabels() {
    d3.select('svg.time-chart g.legend g.total').attr(
      'transform',
      `translate(${
        innerWidth - legendWidth.cans - legendWidth.bottles - legendWidth.total
      }, 0)`,
    );

    d3.select('svg.time-chart g.legend g.bottles').attr(
      'transform',
      `translate(${innerWidth - legendWidth.cans - legendWidth.bottles}, 0)`,
    );

    d3.select('svg.time-chart g.legend g.cans').attr(
      'transform',
      `translate(${innerWidth - legendWidth.cans}, 0)`,
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
      case Types.total:
        return data.reduce((acc, { bottle, can }) => acc + bottle + can, 0);
      case Types.bottles:
        return data.reduce((acc, { bottle }) => acc + bottle, 0);
      case Types.cans:
        return data.reduce((acc, { can }) => acc + can, 0);
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
    .text(name => intl.formatMessage({ id: `stats.addTimeline.${name}` }))
    .each(getTextWidth);

  legendGroups
    .append('text')
    .attr('x', 50)
    .attr('y', innerHeight / 2 + 8)
    .attr('dominant-baseline', 'middle')
    .text(getSum);
};

export default createLegend;
