import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';

import GlobalStateProvider from 'utils/contexts';
import { en, pl } from 'utils/dictionary';
import 'utils/theme/globals.css';

import { GlobalHead } from 'elements';
import TopBar from 'components/TopBar';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const dictionary = { en: flatten(en), pl: flatten(pl) };

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
