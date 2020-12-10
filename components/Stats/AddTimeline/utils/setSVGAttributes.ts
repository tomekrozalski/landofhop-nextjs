import * as d3 from 'd3';

import { Sizes } from './Sizes';

type Props = {
  sizes: Sizes;
  wrapper: SVGSVGElement;
};

const setSVGAttributes = ({ sizes, wrapper }: Props) => {
  const svg = d3.select(wrapper);

  svg
    .attr(
      'viewBox',
      `0 0 ${sizes.chart.width} ${sizes.chart.height + sizes.legend.height}`,
    )
    .classed('chart time-chart', true);
};

export default setSVGAttributes;
