import { Basics } from 'utils/types/Beverage';
import LandingPage from 'components/LandingPage';

export async function getStaticPaths() {
  const getTotal = await fetch(`${process.env.API_SERVER}/beverage/total`);
  const total: number = await getTotal.json();

  const paths = new Array(Math.ceil(total / 60))
    .fill('')
    .map((_, i) => `/list/${i + 1}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = +params.id;
  const getTotal = await fetch(`${process.env.API_SERVER}/beverage/total`);
  const total: number = await getTotal.json();
  const skip = id * 60 - 60;

  const getBasics = await fetch(
    `${process.env.API_SERVER}/beverage/basics/${skip}/60`,
  );
  const basics: Basics[] = await getBasics.json();

  return {
    props: {
      basics,
      current: id,
      total,
    },
  };
}

export default LandingPage;
