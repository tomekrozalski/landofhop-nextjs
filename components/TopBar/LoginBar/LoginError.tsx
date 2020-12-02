import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { AuthenticationContext } from 'utils/contexts';
import WarningIcon from 'elements/icons/Warning';
import styles from './LoginBar.module.css';

const LoginError = () => {
  const { logInAfterFailure } = useContext(AuthenticationContext);

  return (
    <div className={styles.infoWrapper}>
      <WarningIcon className={styles.infoIcon} />
      <FormattedMessage id="errors.loginFailed" />
      <button className={styles.resetButton} onClick={logInAfterFailure}>
        <FormattedMessage id="errors.tryAgain" />
      </button>
    </div>
  );
};

export default LoginError;
