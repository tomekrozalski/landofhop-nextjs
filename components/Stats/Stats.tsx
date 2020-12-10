import { FormattedMessage } from 'react-intl';

import HeadTitle from 'elements/HeadTitle';
import { Stats as StatsTypes } from 'utils/types/Beverage';
import { AddTimeline, AlcoholChart, FermentationTimeline } from '.';

const Stats: React.FC<StatsTypes> = ({
  addTimelineData,
  alcoholChartData,
  fermentationTimelineData,
}) => (
  <article>
    <HeadTitle title="stats" />
    <h1>
      <FormattedMessage id="stats.name" />
    </h1>
    <AlcoholChart data={alcoholChartData} />
    <AddTimeline data={addTimelineData} />
    <FermentationTimeline data={fermentationTimelineData} />
    {/* <TopBrands /> */}
  </article>
);

export default Stats;
