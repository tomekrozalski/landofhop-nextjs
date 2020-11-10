import { useContext } from 'react';

import { TopBarContext } from 'utils/contexts';
import styles from './SearchBar.module.css';

const Searchbar = () => {
  const { setLoginbar, setNavbar, setSearchbarActive } = useContext(
    TopBarContext,
  );

  return (
    <div className={styles.searchBar}>
      <button type="button" onClick={() => console.log('set active')}>
        loupe
      </button>
    </div>
  );
};

export default Searchbar;
