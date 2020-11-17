import { Basics } from 'utils/types/Beverage';
import LandingPage from 'components/LandingPage';

export async function getStaticProps() {
  const getTotal = await fetch(`${process.env.API_SERVER}/beverage/total`);
  const total: number = await getTotal.json();

  const getBasics = await fetch(
    `${process.env.API_SERVER}/beverage/basics/0/60`,
  );
  const basics: Basics[] = await getBasics.json();

  return {
    props: {
      basics,
      current: 1,
      total,
    },
  };
}

export default LandingPage;
