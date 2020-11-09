import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import styles from 'utils/theme/Home.module.css';

const About = () => (
  <div className={styles.container}>
    <Head>
      <title>O stronie</title>
    </Head>
    <FormattedMessage id="about" />
  </div>
);

export default About;
