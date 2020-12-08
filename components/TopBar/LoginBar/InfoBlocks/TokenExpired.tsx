import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { AuthenticationContext } from 'utils/contexts';
import WarningIcon from 'elements/icons/Warning';
import styles from './InfoBlocks.module.css';

const TokenExpired = () => {
  const { logInAfterFailure, logOut } = useContext(AuthenticationContext);

  return (
    <div className={styles.infoWrapper}>
      <WarningIcon className={styles.infoIcon} />
      <FormattedMessage id="errors.tokenExpired" />
      <button className={styles.resetButton} onClick={logInAfterFailure}>
        <FormattedMessage id="errors.loginAgain" />
      </button>
      <button className={styles.resetButton} onClick={logOut}>
        <FormattedMessage id="errors.doNotLogin" />
      </button>
    </div>
  );
};

export default TokenExpired;
