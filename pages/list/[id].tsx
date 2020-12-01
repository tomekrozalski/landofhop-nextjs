import { GetStaticPaths, GetStaticProps } from 'next';

import { Basics } from 'utils/types/Beverage';
import { Endpoints, serverCall } from 'utils/helpers';
import LandingPage from 'components/LandingPage';

export const getStaticProps: GetStaticProps<{
  basics: Basics[];
  current: number;
  total: number;
}> = async ({ locale, params }) => {
  const total: number = await serverCall(Endpoints.beverageTotal);
  const id = +params.id;
  const skip = id * 60 - 60;
  const basics: Basics[] = await serverCall(Endpoints.beverageBasics, {
    pathParams: [locale, skip, 60],
  });

  return {
    props: {
      basics,
      current: id,
      total,
    },
    // revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const total: number = await serverCall(Endpoints.beverageTotal);

  const paths = new Array(Math.ceil(total / 60))
    .fill('')
    .map((_, i) => `/list/${i + 1}`);

  return { paths, fallback: false };
};

export default LandingPage;
