import * as d3 from 'd3';
import clsx from 'clsx';

import generalStyles from 'components/Stats/Stats.module.css';
import specificStyles from '../AlcoholChart.module.css';
import { Sizes } from './Sizes';

type Props = {
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const setSVGAttributes = ({ sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);
  const { height, width } = sizes.chart;

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .classed(clsx(generalStyles.chart, specificStyles.alcoholChart), true);
};

export default setSVGAttributes;
