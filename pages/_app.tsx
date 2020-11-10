import Link from 'next/link';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import GlobalStateProvider from 'utils/contexts';
import en from 'utils/dictionary/en.json';
import pl from 'utils/dictionary/pl.json';
import 'utils/theme/globals.css';

import { Header } from 'components/TopBar';

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const dictionary = { en, pl };

  return (
    <GlobalStateProvider>
      <IntlProvider locale={locale} messages={dictionary[locale]}>
        <Header />
        <Component {...pageProps} />
      </IntlProvider>
    </GlobalStateProvider>
  );
};

export default App;
