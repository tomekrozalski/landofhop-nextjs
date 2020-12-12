import * as d3 from 'd3';
import { IntlShape } from 'react-intl';

import { TopBrandsTimelineBar } from 'utils/types/Beverage';
import { renderTimelineAxis } from '../../utils';
import { Sizes } from './Sizes';
import specificStyles from '../TopBrandsTimeline.module.css';

type Props = {
  data: TopBrandsTimelineBar[];
  intl: IntlShape;
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const createChart = ({ data, intl, sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const { height, margin, width } = sizes;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Define horizontal scale

  const xValue = (d: TopBrandsTimelineBar) => d.date;

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  // Define vertical scale

  const highestValue = Math.max(
    ...data[data.length - 1].brands.map(({ amount }) => amount),
  );

  console.log('data', data);
  console.log('highestValue', highestValue);

  const yScale = d3
    .scaleLinear()
    .domain([0, highestValue + 3])
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
    yTicks: highestValue / 5,
  });

  // ----------------------------------------------------
  // behaviour on mouse cursor over

  function handleMouseOver(this: SVGPathElement | SVGTextElement) {
    const badge = this.classList[1];
    function isNotCurrent(this: any) {
      return this.classList[1] !== badge;
    }
    d3.selectAll(`svg.${specificStyles.TopBrandsTimeline} .line-path`).classed(
      'fade-out',
      isNotCurrent,
    );
    d3.selectAll(`svg.${specificStyles.TopBrandsTimeline} text.label`).classed(
      'fade-out',
      isNotCurrent,
    );
  }

  function handleMouseOut() {
    d3.selectAll(`svg.${specificStyles.TopBrandsTimeline} .fade-out`).classed(
      'fade-out',
      false,
    );
  }

  // ----------------------------------------------------
  // Add hidden labels on the right side of the chart

  const labels = chart.append('g').attr('data-attr', 'labels');

  data[data.length - 1].brands.forEach(({ amount, badge, name }) => {
    labels
      .append('text')
      .classed(`label ${badge}`, true)
      .attr('x', innerWidth)
      .attr('y', yScale(amount))
      .attr('dominant-baseline', 'middle')
      .attr('opacity', 0)
      .text(name.value)
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut);
  });

  // ----------------------------------------------------
  // Add hidden lines

  const lines = chart.append('g').attr('data-attr', 'lines');

  const lineGenerator = (value: string) =>
    d3
      .line<TopBrandsTimelineBar>()
      .x(d => xScale(xValue(d)) || 0)
      .y(d => yScale(d.brands.find(({ id }) => id === value)!.amount))
      .curve(d3.curveBasis);

  function getTotalLength(this: SVGPathElement) {
    return this.getTotalLength() + 10;
  }

  data[0].brands.forEach(({ badge, id }) => {
    lines
      .append('path')
      .datum<any>(data)
      .classed(`line-path ${badge}`, true)
      .attr('d', lineGenerator(id))
      .attr('transform', `translate(${xScale.bandwidth() / 2}, 0)`)
      .attr('stroke-dashoffset', getTotalLength)
      .attr('stroke-dasharray', getTotalLength)
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut);
  });

  // Reveal lines and label when the chart is visible

  const reveal = () => {
    data[0].brands.forEach(({ badge }) => {
      lines
        .select(`.line-path.${badge}`)
        .transition()
        .duration(1500)
        .ease(d3.easeSin)
        .attr('stroke-dashoffset', 0);

      labels
        .select(`text.${badge}`)
        .transition()
        .duration(250)
        .delay(1500)
        .attr('opacity', 1);
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
