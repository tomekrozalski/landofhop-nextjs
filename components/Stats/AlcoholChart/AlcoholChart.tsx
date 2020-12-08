import { useEffect, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { AlcoholChartBar } from 'utils/types/Beverage';
import SectionHeader from 'elements/SectionHeader';
import { createChart, getAverage } from './utils';

const AlcoholChart: React.FC<{ data: AlcoholChartBar[] }> = ({ data }) => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  useEffect(() => {
    const average: number = getAverage(data);
    createChart({ average, data, intl, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.alcohol.name" />
      </SectionHeader>
      <div className="alcohol-chart">
        <svg ref={svg} />
      </div>
    </>
  );
};

export default AlcoholChart;
