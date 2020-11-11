import { useContext } from 'react';
import clsx from 'clsx';

import { TopBarContext } from 'utils/contexts';
import { Logo, NavigationSwitcher, SearchBar } from '.';
import styles from './Header.module.css';

const Header = () => {
  const { loginbar, navbar } = useContext(TopBarContext);

  return (
    <header
      className={clsx(
        styles.header,
        { [styles.loginbar]: loginbar },
        { [styles.navbar]: navbar },
      )}
    >
      <div className={styles.grid}>
        <Logo />
        <SearchBar />
        <NavigationSwitcher />
      </div>
    </header>
  );
};

export default Header;
