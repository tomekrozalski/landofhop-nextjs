import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

import { TopBarContext } from 'utils/contexts';

const ListOfLinks: React.FC = () => {
  const router = useRouter();
  // const { isLoggedIn } = useContext(AuthenticationContext);
  const { setLoginbar, setNavbar } = useContext(TopBarContext);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setLoginbar(false);
      setNavbar(false);
    });
  });

  return (
    <ul>
      <li>
        <Link href="/about">
          <a>
            <FormattedMessage id="global.about" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/stats">
          <a>
            <FormattedMessage id="global.stats" />
          </a>
        </Link>
        {/* <Link href="/ingredients">
           <a><FormattedMessage id="beverage.ingredients" /></a>
        </Link> */}
      </li>
      {/* {isLoggedIn && (
        <li>
          <Link href="/add-new-beverage">
            <a>
              <FormattedMessage id="global.addBeverage" />
            </a>
          </Link>
        </li>
      )} */}
    </ul>
  );
};

export default ListOfLinks;
