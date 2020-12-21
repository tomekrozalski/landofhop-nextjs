import { useContext } from 'react';
import clsx from 'clsx';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
  TopBarContext,
} from 'utils/contexts';
import { LoginError, LoginSuccess, TokenExpired } from './InfoBlocks';
import FormBody from './FormBody';
import styles from './LoginBar.module.css';

const LoginBar: React.FC = () => {
  const { authenticationStatus: status } = useContext(AuthenticationContext);
  const { loginbar, navbar } = useContext(TopBarContext);

  return (
    <div
      className={clsx(
        styles.loginbar,
        { [styles.navbar]: navbar },
        { [styles.active]: loginbar },
      )}
    >
      {status === AuthenticationStatusEnum.rejected && <LoginError />}
      {status === AuthenticationStatusEnum.expired && <TokenExpired />}
      {status === AuthenticationStatusEnum.resolved && <LoginSuccess />}
      <FormBody />
    </div>
  );
};

export default LoginBar;
