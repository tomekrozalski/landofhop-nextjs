import Link from 'next/link';
import { useRouter } from 'next/router';

const LangNavigation: React.FC = props => {
  const { locales, route, query } = useRouter();

  return (
    <ul>
      {locales.map(locale => (
        <li key={locale}>
          <Link href={{ pathname: route, query }} locale={locale}>
            <a>{locale.toUpperCase()}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangNavigation;
