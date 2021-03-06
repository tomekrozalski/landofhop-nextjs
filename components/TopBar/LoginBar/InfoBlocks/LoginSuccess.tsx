import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { formatDistanceStrict } from 'date-fns';
import pl from 'date-fns/locale/pl';

import { AuthenticationContext } from 'utils/contexts';
import SuccessIcon from 'elements/icons/Success';
import styles from './InfoBlocks.module.css';

const LoginSuccess = () => {
  const { tokenExpirationDate } = useContext(AuthenticationContext);

  return (
    <div className={styles.infoWrapper}>
      <SuccessIcon className={styles.infoIcon} />
      <FormattedMessage
        id="global.loginSuccess"
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
