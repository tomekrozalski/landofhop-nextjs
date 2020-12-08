import { GetStaticProps } from 'next';

import { Stats as StatsTypes } from 'utils/types/Beverage';
import serverCall, { Endpoints } from 'utils/helpers/serverCall';
import Stats from 'components/Stats';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data: StatsTypes = await serverCall(Endpoints.beverageStats, {
    pathParams: [locale],
  });

  return { props: { ...data } };
};

export default Stats;
