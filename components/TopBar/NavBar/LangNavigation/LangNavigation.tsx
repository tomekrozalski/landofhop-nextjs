import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './LangNavigation.module.css';

const LangNavigation: React.FC = () => {
  const { locales } = useRouter();

  return (
    <ul className={styles.langNavigation}>
      {locales.map(locale => (
        <li key={locale}>
          <Link href="" locale={locale}>
            <a>{locale.toUpperCase()}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangNavigation;
