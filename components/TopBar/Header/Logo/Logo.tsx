import Link from 'next/link';

import styles from './Logo.module.css';

const Logo: React.FC = () => (
  <Link href="/">
    <a className={styles.logo}>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.3 127.3">
          <title>Land of Hop</title>
          <path
            className={styles.h}
            d="M49.9 96.5h-9V67.7H8.9v28.8H0V30.3h8.9v29.2h32V30.3h9V96.5z"
          />
          <path
            className={styles.o}
            d="M137.4 0c35.5 0 63 28.4 63 63.7 0 35.1-27.5 63.5-63 63.5 -35.3 0-62.6-28.4-62.6-63.5C74.8 28.4 102.1 0 137.4 0zM137.4 111.1c26.1 0 46.1-21.1 46.1-47.3 0-26.3-20-47.5-46.1-47.5 -25.9 0-45.9 21.2-45.9 47.5C91.5 90 111.5 111.1 137.4 111.1z"
          />
          <path
            className={styles.p}
            d="M251.6 30.3c14 0 19.7 10.4 19.7 20.7 0 10.5-5.7 20.6-19.7 20.6h-17.4v24.8h-9V30.3H251.6zM234.3 38.7v24.7h16.8c8.1 0 11.3-6.1 11.3-12.3 0-6-3.2-12.4-10.8-12.4H234.3z"
          />
        </svg>
      </h1>
    </a>
  </Link>
);

export default Logo;
