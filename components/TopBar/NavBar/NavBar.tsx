import { useContext } from 'react';
import clsx from 'clsx';

import { TopBarContext } from 'utils/contexts';
import { LangNavigation, MainNavigation } from '.';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  const { navbar } = useContext(TopBarContext);

  return (
    <nav className={clsx(styles.navbar, { [styles.active]: navbar })}>
      <div className={styles.container}>
        <MainNavigation />
        <LangNavigation />
      </div>
    </nav>
  );
};

export default NavBar;
