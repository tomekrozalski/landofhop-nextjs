import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './LangNavigation.module.css';

const LangNavigation: React.FC = () => {
  const { asPath, locales } = useRouter();

  return (
    <ul className={styles.langNavigation}>
      {locales.map(locale => (
        <li key={locale}>
          <Link href={asPath} locale={locale}>
            <a>{locale.toUpperCase()}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangNavigation;
