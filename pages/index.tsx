import { HeadTitle } from 'elements';

const Home: React.FC = props => {
  console.log('props', props);

  return (
    <div>
      <HeadTitle title="main" />
      Bum
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/beverage');
  const beverages = await res.json();

  return {
    props: {
      beverages,
    },
  };
}

export default Home;
