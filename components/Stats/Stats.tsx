import { FormattedMessage } from 'react-intl';

import HeadTitle from 'elements/HeadTitle';
// import { AddTimeline, AlcoholChart, Fermentation, TopBrands } from '.';
// import './chart.css';

const Stats: React.FC = () => (
  <article>
    <HeadTitle title="stats" />
    <h1>
      <FormattedMessage id="stats.name" />
    </h1>
    Stats
    {/* <AlcoholChart />
    <AddTimeline />
    <Fermentation />
    <TopBrands /> */}
  </article>
);

export default Stats;
