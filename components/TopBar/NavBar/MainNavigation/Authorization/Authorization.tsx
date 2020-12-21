import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
  TopBarContext,
} from 'utils/contexts';
import LockedIcon from './LockedIcon';
import UnlockedIcon from './UnlockedIcon';
import styles from './Authorization.module.css';

const Authorization: React.FC = () => {
  const { isLoggedIn, logOut, setAuthenticationStatus } = useContext(
    AuthenticationContext,
  );
  const { loginbar, setLoginbar } = useContext(TopBarContext);

  const onLogIn = () => {
    setAuthenticationStatus(AuthenticationStatusEnum.idle);
    setLoginbar(!loginbar);
  };

  return (
    <div className={styles.authorization}>
      {isLoggedIn ? (
        <button onClick={logOut}>
          <UnlockedIcon />
          <FormattedMessage id="global.logout" />
        </button>
      ) : (
        <button onClick={onLogIn}>
          <LockedIcon />
          <FormattedMessage id="global.login" />
        </button>
      )}
    </div>
  );
};

export default Authorization;
