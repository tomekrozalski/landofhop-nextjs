import { GetStaticPaths, GetStaticProps } from 'next';

import { Basics } from 'utils/types/Beverage';
import LandingPage from 'components/LandingPage';

export const getStaticProps: GetStaticProps<{
  basics: Basics[];
  current: number;
  total: number;
}> = async ({ locale, params }) => {
  const id = +params.id;
  const getTotal = await fetch(`${process.env.API_SERVER}/beverage/total`);
  const total: number = await getTotal.json();
  const skip = id * 60 - 60;

  const getBasics = await fetch(
    `${process.env.API_SERVER}/beverage/basics/${locale}/${skip}/60`,
  );
  const basics: Basics[] = await getBasics.json();

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
  const getTotal = await fetch(`${process.env.API_SERVER}/beverage/total`);
  const total: number = await getTotal.json();

  const paths = new Array(Math.ceil(total / 60))
    .fill('')
    .map((_, i) => `/list/${i + 1}`);

  return { paths, fallback: false };
};

export default LandingPage;
