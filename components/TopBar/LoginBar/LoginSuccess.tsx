import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { formatDistanceStrict } from 'date-fns';
import pl from 'date-fns/locale/pl';

import { AuthenticationContext } from 'utils/contexts';
import { SuccessIcon } from 'elements/icons';
import styles from './LoginBar.module.css';

const LoginSuccess = () => {
  const { tokenExpirationDate } = useContext(AuthenticationContext);

  return (
    <div className={styles.loginerror}>
      <SuccessIcon className={styles.warningIcon} />
      <FormattedMessage
        id="loginbar.loginSuccess"
        values={{
          expiresIn: formatDistanceStrict(tokenExpirationDate, new Date(), {
            addSuffix: true,
            locale: pl,
          }),
        }}
      />
    </div>
  );
};

export default LoginSuccess;
