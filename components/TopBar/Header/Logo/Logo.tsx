import Link from 'next/link';

//import { Hop as HopIcon } from 'elements/icons';
import styles from './Logo.module.css';

const Logo: React.FC = () => (
  <Link href="/">
    <a className={styles.logo}>
      <h1>{/* <HopIcon /> */}</h1>
    </a>
  </Link>
);

export default Logo;
