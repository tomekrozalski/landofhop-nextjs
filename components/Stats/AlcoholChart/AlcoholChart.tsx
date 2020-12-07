import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { SectionHeader } from 'elements';
import { AlcoholData } from './types';
import {
  createChart,
  getAverage,
  getMissingAlcoholBeverages,
  normalizeData,
} from './utils';
import './alcohol-chart.css';

const AlcoholChart: React.FC = () => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);

  const rawData = useStaticQuery(graphql`
    query AlcoholStats {
      allBeverage {
        edges {
          node {
            alcohol {
              label {
                value
                unit
                relate
              }
              producer {
                relate
                unit
                value
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const data: AlcoholData[] = normalizeData(rawData);
    const average: number = getAverage(data);
    const missingAlcoholBeverages = getMissingAlcoholBeverages(rawData);

    if (missingAlcoholBeverages) {
      // eslint-disable-next-line no-console
      console.warn(
        'There are beverages without information about alcohol in database',
      );
    }

    createChart({ average, data, intl, wrapper: svg.current });
  }, []);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.alcohol.name" />
      </SectionHeader>
      <div className="alcohol-chart-wrapper">
        <svg ref={svg} />
      </div>
    </>
  );
};

export default AlcoholChart;
