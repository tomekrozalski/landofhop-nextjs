import Link from 'next/link';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import 'utils/theme/globals.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  console.log('router', router);
  const dictionary = {
    en: {
      about: 'this is magic',
    },
    pl: {
      about: 'to jest magia',
    },
  };

  return (
    <IntlProvider locale={router.locale} messages={dictionary[router.locale]}>
      <div>
        <header>header</header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Strona główna</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>O stronie</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="" locale="pl">
                <a>pl</a>
              </Link>
            </li>
            <li>
              <Link href="" locale="en">
                <a>en</a>
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Component {...pageProps} />
      </div>
    </IntlProvider>
  );
};

export default App;
