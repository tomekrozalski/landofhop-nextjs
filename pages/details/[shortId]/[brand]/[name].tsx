import { GetStaticPaths, GetStaticProps } from 'next';
import { AugmentedDetails, Basics } from 'utils/types/Beverage';
import BeverageDetails from 'components/BeverageDetails';

export const getStaticProps: GetStaticProps<AugmentedDetails> = async ({
  params,
}) => {
  const { brand, name, shortId } = params;
  const getDetails = await fetch(
    `${process.env.API_SERVER}/beverage/details/${shortId}/${brand}/${name}`,
  );
  const props: AugmentedDetails = await getDetails.json();

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export default BeverageDetails;
