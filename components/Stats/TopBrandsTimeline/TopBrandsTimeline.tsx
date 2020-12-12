import { useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { TopBrandsTimelineBar } from 'utils/types/Beverage';
import SectionHeader from 'elements/SectionHeader';
import { Sizes } from './utils/Sizes';
import { createChart, setSVGAttributes } from './utils';

const TopBrandsTimeline: React.FC<{ data: TopBrandsTimelineBar[] }> = ({
  data,
}) => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  useEffect(() => {
    const sizes: Sizes = {
      width: 1160,
      height: 600,
      margin: {
        top: 40,
        right: 140,
        bottom: 40,
        left: 40,
      },
    };

    setSVGAttributes({ sizes, wrapper: svg.current });
    createChart({ data, intl, sizes, wrapper: svg.current });
  }, [data]);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.topBrands.name" />
      </SectionHeader>
      <svg ref={svg} />
    </>
  );
};

export default TopBrandsTimeline;
