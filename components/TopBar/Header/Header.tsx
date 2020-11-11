import { useContext } from 'react';
import classNames from 'classNames';

import { TopBarContext } from 'utils/contexts';
import { Logo, NavigationSwitcher, SearchBar } from '.';
import styles from './Header.module.css';

const Header = () => {
  const { loginbar, navbar } = useContext(TopBarContext);

  return (
    <header
      className={classNames(
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
