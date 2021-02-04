import { GetStaticPaths, GetStaticProps } from 'next';

import { AugmentedDetails } from 'utils/types/Beverage';
import serverCall, { Endpoints } from 'utils/helpers/serverCall';
import BeverageDetails from 'components/BeverageDetails';

type Props = {
  locale: string;
  params: {
    shortId: string;
    brand: string;
    name: string;
  };
};

export const getStaticProps: GetStaticProps<AugmentedDetails> = async ({
  locale,
  params,
}: Props) => {
  const { brand, name, shortId } = params;

  const props: AugmentedDetails = await serverCall(Endpoints.beverageDetails, {
    pathParams: [locale, shortId, brand, name],
  }).catch(() => false);

  return props
    ? { props, revalidate: 10 }
    : {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export default BeverageDetails;
