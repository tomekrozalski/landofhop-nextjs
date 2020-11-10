import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { TopBarContext } from 'utils/contexts';
import styles from './NavigationSwitcher.module.css';

const NavigationSwitcher: React.FC = () => {
  const { navbar, setLoginbar, setNavbar } = useContext(TopBarContext);

  return (
    <button
      className={styles.navigationSwitcher}
      onClick={() => {
        setNavbar(!navbar);
        setLoginbar(false);
      }}
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 9">
        <title>
          <FormattedMessage id={`global.${navbar ? 'close' : 'open'}`} />
        </title>
        <circle cx="35.5" cy="4.5" r="4.5" />
        <circle cx="20" cy="4.5" r="4.5" />
        <circle cx="4.5" cy="4.5" r="4.5" />
      </svg>
    </button>
  );
};

export default NavigationSwitcher;
