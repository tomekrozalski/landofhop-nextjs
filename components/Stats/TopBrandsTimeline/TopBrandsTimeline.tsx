import { useEffect, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import * as d3 from 'd3';
import clsx from 'clsx';

import { TopBrandsTimelineBar } from 'utils/types/Beverage';
import SectionHeader from 'elements/SectionHeader';
import { Sizes } from './utils/Sizes';
import { createChart, setSVGAttributes } from './utils';
import styles from './TopBrandsTimeline.module.css';

const TopBrandsTimeline: React.FC<{ data: TopBrandsTimelineBar[] }> = ({
  data,
}) => {
  const intl = useIntl();
  const svg = useRef<SVGSVGElement>(null!);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const sizes: Sizes = {
      width: 1160,
      height: 600,
      margin: {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
      },
    };

    setSVGAttributes({ sizes, wrapper: svg.current });
    createChart({ data, intl, setSelected, sizes, wrapper: svg.current });
  }, [data]);

  useEffect(() => {
    function isNotCurrent(this: SVGPathElement) {
      return !!selected && this.classList[2] !== selected;
    }

    d3.selectAll(`svg.${styles.topBrandsTimeline} .line-path`).classed(
      'fade-out',
      isNotCurrent,
    );
  }, [selected]);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="stats.topBrands.name" />
      </SectionHeader>
      <svg ref={svg} />
      <ol className={clsx(styles.legend, { [styles.highlighted]: !!selected })}>
        {data[data.length - 1].brands
          .sort((a, b) => (a.amount < b.amount ? 1 : -1))
          .map(({ badge, id, name }, i) => (
            <li
              key={id}
              className={clsx(
                styles.legendItem,
                styles[`topBrandsLegend${i + 1}`],
                {
                  [styles.selected]: selected === badge,
                },
              )}
              data-order={i + 1}
              onMouseEnter={() => setSelected(badge)}
              onMouseLeave={() => setSelected(null)}
            >
              {name.value}
            </li>
          ))}
      </ol>
    </>
  );
};

export default TopBrandsTimeline;
