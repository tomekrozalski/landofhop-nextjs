import { GetStaticProps } from 'next';

import { Basics } from 'utils/types/Beverage';
import serverCall, { Endpoints } from 'utils/helpers/serverCall';
import LandingPage from 'components/LandingPage';

export const getStaticProps: GetStaticProps<{
  basics: Basics[];
  current: number;
  total: number;
}> = async ({ locale }) => {
  const total: number = await serverCall(Endpoints.beverageTotal);
  const basics: Basics[] = await serverCall(Endpoints.beverageBasics, {
    pathParams: [locale, 0, 60],
  });

  return {
    props: {
      basics,
      current: 1,
      total,
    },
    //revalidate: 5,
  };
};

export default LandingPage;
