import * as d3 from 'd3';
import { IntlShape } from 'react-intl';

import { AlcoholChartBar } from 'utils/types/Beverage';

type Props = {
  average: number;
  data: AlcoholChartBar[];
  intl: IntlShape;
  wrapper: SVGSVGElement;
};

const createChart = ({ average, data, intl, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  const margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  };

  const width = 1160;
  const innerWidth = width - margin.left - margin.right;
  const height = 600;
  const innerHeight = height - margin.top - margin.bottom;

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .classed('chart alcohol-chart', true);

  // Define horizontal scale

  const xValue = (d: AlcoholChartBar) => d.value.toString();

  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .padding(0.1);

  // Define vertical scale

  const yValue = (d: AlcoholChartBar) => d.beverages;

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, yValue) || 10 + 3])
    .range([innerHeight, 0]);

  // Translate the chart and add axis

  const chart = svg
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const axis = chart.append('g').attr('data-attr', 'axis');

  const xAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .tickValues(xScale.domain().filter(d => !(+d % 1)))
    .tickFormat(d => `${d}%`);

  const xAxisGroup = axis
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${innerHeight})`);

  xAxisGroup
    .append('text')
    .attr('x', innerWidth)
    .attr('y', 40)
    .attr('text-anchor', 'end')
    .classed('label', true)
    .text(intl.formatMessage({ id: 'stats.alcohol.alcohol' }));

  const yAxis = d3
    .axisLeft(yScale)
    .ticks((d3.max(data, yValue) || 100) / 5)
    .tickSize(-innerWidth);

  const yAxisGroup = axis.append('g').classed('y-axis-group', true).call(yAxis);

  yAxisGroup.select('.domain').remove();

  yAxisGroup.selectAll('.tick').select('text').attr('dy', -5);

  yAxisGroup
    .append('text')
    .attr('x', 0)
    .attr('y', -25)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'end')
    .classed('label', true)
    .text(intl.formatMessage({ id: 'stats.alcohol.numberOfBeverages' }));

  // ----------------------------------------------------
  // behaviour on mouse cursor over

  const handleMouseOver = (e: any, d: AlcoholChartBar) => {
    const i = e.target.dataset.order;
    const directLeft = d.value > 15;

    const barLabel = chart
      .append('g')
      .classed(`bar-label-${i}`, true)
      .attr('transform', 'translate(8, -10)');

    const background = barLabel
      .append('rect')
      .attr('width', 0)
      .attr('height', 20)
      .attr('x', xScale(xValue(d) || ''))
      .attr('y', yScale(yValue(d)))
      .attr('opacity', '0')
      .transition()
      .duration(500)
      .attr('opacity', '1');

    function getTextWidth(this: SVGTextElement) {
      const { width: textWidth } = this.getBBox();
      const getLeftTranslate = () => -textWidth - 8 - xScale.bandwidth();

      background.attr('width', textWidth + 10);

      if (directLeft) {
        barLabel.attr('transform', `translate(${getLeftTranslate()}, -10)`);
      }
    }

    barLabel
      .append('text')
      .text(
        `${intl.formatMessage(
          { id: 'stats.alcohol.barLabel' },
          {
            beverages: d.beverages,
            value: Intl.NumberFormat(intl.locale).format(d.value),
          },
        )}${
          d.value === average
            ? ` - ${intl.formatMessage({ id: 'stats.alcohol.isAverage' })}`
            : ''
        }`,
      )
      .attr('dominant-baseline', 'middle')
      .attr('x', (xScale(xValue(d)) || 0) + 5)
      .attr('y', yScale(yValue(d)) + 11)
      .attr('opacity', '0')
      .transition()
      .duration(500)
      .attr('opacity', '1')
      .each(getTextWidth);
  };

  const handleMouseOut = (e: any) => {
    const i = e.target.dataset.order;

    d3.selectAll(`.bar-label-${i} *`)
      .transition()
      .duration(500)
      .attr('opacity', '0')
      .on('end', () => {
        d3.selectAll(`.bar-label-${i}`).remove();
      });
  };

  // ----------------------------------------------------
  // Add hidden lines

  const barsGroup = chart.append('g').attr('data-attr', 'bars');

  const bars = barsGroup
    .selectAll('.bar')
    .data(data.filter(({ beverages }) => beverages))
    .enter()
    .append('rect')
    .classed('bar', true)
    .classed('average', d => d.value === average)
    .attr('width', xScale.bandwidth())
    .attr('height', 0)
    .attr('x', d => xScale(xValue(d)) || '')
    .attr('y', innerHeight)
    .attr('data-order', (_, i) => i)
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);

  const reveal = () => {
    bars
      .transition()
      .duration(1000)
      .attr('height', d => innerHeight - yScale(yValue(d)))
      .attr('y', d => yScale(yValue(d)));
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
