import * as d3 from 'd3';
import { IntlShape } from 'react-intl';

import { TopBrandsTimelineBar } from 'utils/types/Beverage';
import { renderTimelineAxis } from '../../utils';
import { Sizes } from './Sizes';
import sortData from './sortData';
import specificStyles from '../TopBrandsTimeline.module.css';

type Props = {
  data: TopBrandsTimelineBar[];
  intl: IntlShape;
  setSelected: (line: string) => void;
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const createChart = ({ data, intl, setSelected, sizes, wrapper }: Props) => {
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
    const badge = this.classList[2];
    setSelected(badge);

    function isNotCurrent(this: SVGPathElement) {
      return this.classList[2] !== badge;
    }

    d3.selectAll(`svg.${specificStyles.topBrandsTimeline} .line-path`).classed(
      'fade-out',
      isNotCurrent,
    );
  }

  function handleMouseOut() {
    setSelected(null);

    d3.selectAll(`svg.${specificStyles.topBrandsTimeline} .fade-out`).classed(
      'fade-out',
      false,
    );
  }

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

  sortData(data)
    .reverse()
    .forEach(({ badge, id }, i) => {
      lines
        .append('path')
        .datum<any>(data)
        .classed(`line-path line-path-${10 - i} ${badge}`, true)
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
