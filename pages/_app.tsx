import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import GlobalStateProvider from 'utils/contexts';
import en from 'utils/dictionary/en.json';
import pl from 'utils/dictionary/pl.json';
import 'utils/theme/globals.css';

import { GlobalHead } from 'elements';
import TopBar from 'components/TopBar';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const dictionary = { en, pl };

  return (
    <GlobalStateProvider>
      <IntlProvider locale={locale} messages={dictionary[locale]}>
        <GlobalHead />
        <TopBar />
        <main>
          <Component {...pageProps} />
        </main>
      </IntlProvider>
    </GlobalStateProvider>
  );
};

export default App;
