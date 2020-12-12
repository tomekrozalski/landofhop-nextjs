import * as d3 from 'd3';
import clsx from 'clsx';

import generalStyles from 'components/Stats/Stats.module.css';
import specificStyles from '../TopBrandsTimeline.module.css';
import { Sizes } from './Sizes';

type Props = {
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const setSVGAttributes = ({ sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  svg
    .attr('viewBox', `0 0 ${sizes.width} ${sizes.height}`)
    .classed(clsx(generalStyles.chart, specificStyles.topBrandsTimeline), true);
};

export default setSVGAttributes;
