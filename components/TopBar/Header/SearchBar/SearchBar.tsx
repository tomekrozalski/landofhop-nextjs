import { useContext } from 'react';
import { useIntl } from 'react-intl';
import classnames from 'classnames';

import { TopBarContext } from 'utils/contexts';
import styles from './SearchBar.module.css';

const Searchbar = () => {
  const { formatMessage } = useIntl();
  const { searchbarActive, setSearchbarActive } = useContext(TopBarContext);

  return (
    <div className={styles.searchBar}>
      <button
        type="button"
        onClick={() => setSearchbarActive(!searchbarActive)}
      >
        <i
          aria-label={formatMessage({
            id: searchbarActive ? 'global.close' : 'global.search',
          })}
          className={classnames(styles.icon, {
            [styles.active]: searchbarActive,
          })}
        />
      </button>
    </div>
  );
};

export default Searchbar;
