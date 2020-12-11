import * as d3 from 'd3';
import { IntlShape } from 'react-intl';

import { Fermentation as FermentationEnum } from 'utils/enums/Beverage';
import { FermentationTimelineBar } from 'utils/types/Beverage';
import { renderTimelineAxis } from 'components/Stats/utils';
import specificStyles from '../FermentationTimeline.module.css';
import { Sizes } from './Sizes';

type Props = {
  data: FermentationTimelineBar[];
  intl: IntlShape;
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const createChart = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const { height, margin, width } = sizes.chart;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Define horizontal scale

  const xValue = (d: FermentationTimelineBar) => d.date;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  // Define vertical scale

  const top = (d: FermentationTimelineBar) => d[FermentationEnum.top];
  const bottom = (d: FermentationTimelineBar) => d[FermentationEnum.bottom];
  const spontaneous = (d: FermentationTimelineBar) =>
    d[FermentationEnum.spontaneous];
  const total = (d: FermentationTimelineBar) =>
    d[FermentationEnum.top] +
    d[FermentationEnum.bottom] +
    d[FermentationEnum.spontaneous];

  const yScale = d3
    .scaleLinear()
    .domain([0, (d3.max(data, total) || 0) + 3])
    .range([innerHeight, 0]);

  // Translate the chart and add axis

  const chart = svg
    .append('g')
    .attr('data-attr', 'chart')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  renderTimelineAxis({
    chart,
    innerHeight,
    innerWidth,
    intl,
    values: data,
    xScale,
    yScale,
    yTicks: (d3.max(data, total) || 100) / 5,
  });

  // ----------------------------------------------------
  // behaviour on mouse cursor over

  function handleMouseOver(this: SVGPathElement | SVGTextElement) {
    const badge = this.classList[1];
    function isNotCurrent(this: any) {
      return this.classList[1] !== badge;
    }
    d3.selectAll(
      `svg.${specificStyles.fermentationTimeline} .line-path`,
    ).classed('fade-out', isNotCurrent);
  }

  function handleMouseOut() {
    d3.selectAll(
      `svg.${specificStyles.fermentationTimeline} .fade-out`,
    ).classed('fade-out', false);
  }

  // ----------------------------------------------------
  // Add hidden lines

  const lines = chart.append('g').attr('data-attr', 'lines');

  const lineGenerator = (type: any) =>
    d3
      .line<FermentationTimelineBar>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(type(d)))
      .curve(d3.curveBasis);

  function getTotalLength(this: SVGPathElement) {
    return this.getTotalLength() + 20;
  }

  const types = { top, bottom, spontaneous };

  Object.entries(types).forEach(([name, func]) => {
    lines
      .append('path')
      .datum<any>(data)
      .classed(`line-path ${name}`, true)
      .attr('d', lineGenerator(func))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .attr('stroke-dashoffset', getTotalLength)
      .attr('stroke-dasharray', getTotalLength)
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut);
  });

  // Reveal lines and label when the chart is visible

  const reveal = () => {
    Object.keys(types).forEach(name => {
      lines
        .select(`.line-path.${name}`)
        .transition()
        .duration(1500)
        .ease(d3.easeSin)
        .attr('stroke-dashoffset', 0);
    });
  };

  const io = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        reveal();
        observer.disconnect();
      }
    },
    { threshold: 0.8 },
  );

  io.observe(wrapper);
};

export default createChart;
