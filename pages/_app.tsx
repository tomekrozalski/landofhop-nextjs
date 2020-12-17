import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';

import GlobalStateProvider, { TopBarContext } from 'utils/contexts';
import { en, pl } from 'utils/dictionary';
import 'utils/theme/globals.css';
import GlobalHead from 'elements/GlobalHead';
import SearchResults from 'components/LandingPage/SearchResults';
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
          <TopBarContext.Consumer>
            {({ searchbarActive }) =>
              searchbarActive ? <SearchResults /> : <Component {...pageProps} />
            }
          </TopBarContext.Consumer>
        </main>
      </IntlProvider>
    </GlobalStateProvider>
  );
};

export default App;
