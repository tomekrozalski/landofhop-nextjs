import { AugmentedDetails, Basics } from 'utils/types/Beverage';
import BeverageDetails from 'components/BeverageDetails';

export async function getStaticPaths() {
  const getBasics = await fetch(`${process.env.API_SERVER}/beverage/basics`);
  const basics: Basics[] = await getBasics.json();

  const paths = basics.map(({ badge, brand, shortId }) => ({
    params: {
      name: badge,
      brand: brand.badge,
      shortId,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const getDetails = await fetch(
    `${process.env.API_SERVER}/beverage/details/${params.shortId}/${params.brand}/${params.name}`,
  );
  const props: AugmentedDetails = await getDetails.json();

  return { props };
}

export default BeverageDetails;
