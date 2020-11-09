import Head from 'next/head';
import styles from 'utils/theme/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    Bum
  </div>
);

export default Home;
