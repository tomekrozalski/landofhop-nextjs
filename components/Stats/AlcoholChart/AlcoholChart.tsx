import { useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { AlcoholChartBar } from 'utils/types/Beverage';
import SectionHeader from 'elements/SectionHeader';
import { Sizes } from './utils/Sizes';
import { createChart, getAverage, setSVGAttributes } from './utils';

const AlcoholChart: React.FC<{ data: AlcoholChartBar[] }> = ({ data }) => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  useEffect(() => {
    const sizes: Sizes = {
      chart: {
        width: 1160,
        height: 600,
        margin: {
          top: 40,
          right: 40,
          bottom: 40,
          left: 40,
        },
      },
    };

    const average: number = getAverage(data);

    setSVGAttributes({ sizes, wrapper: svg.current });
    createChart({ average, data, intl, sizes, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.alcohol.name" />
      </SectionHeader>
      <svg ref={svg} />
    </>
  );
};

export default AlcoholChart;
