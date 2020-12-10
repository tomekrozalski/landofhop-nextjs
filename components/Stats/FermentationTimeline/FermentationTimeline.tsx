import { useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { FermentationTimelineBar } from 'utils/types/Beverage';
import SectionHeader from 'elements/SectionHeader';
import { Sizes } from './utils/Sizes';
import { createChart, createLegend, setSVGAttributes } from './utils';

const FermentationTimeline: React.FC<{ data: FermentationTimelineBar[] }> = ({
  data,
}) => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  useEffect(() => {
    const sizes: Sizes = {
      chart: {
        width: 1160,
        height: 500,
        margin: {
          top: 40,
          right: 40,
          bottom: 40,
          left: 40,
        },
      },
      legend: {
        width: 1160,
        height: 70,
        margin: {
          top: 20,
          right: 40,
          bottom: 20,
          left: 40,
        },
      },
    };

    setSVGAttributes({ sizes, wrapper: svg.current });
    createChart({ data, intl, sizes, wrapper: svg.current });
    createLegend({ data, intl, sizes, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.fermentation.name" />
      </SectionHeader>
      <div className="fermentation-chart-wrapper">
        <svg ref={svg} />
      </div>
    </>
  );
};

export default FermentationTimeline;
