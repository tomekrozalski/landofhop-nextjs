import { useContext } from 'react';
import clsx from 'clsx';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
  TopBarContext,
} from 'utils/contexts';
import { FormBody, LoginError, LoginSuccess, TokenExpired } from '.';
import styles from './LoginBar.module.css';

const LoginBar: React.FC = () => {
  const { authenticationStatus } = useContext(AuthenticationContext);
  const { loginbar, navbar } = useContext(TopBarContext);

  const Content = () => {
    switch (authenticationStatus) {
      case AuthenticationStatusEnum.error:
        return <LoginError />;
      case AuthenticationStatusEnum.expired:
        return <TokenExpired />;
      case AuthenticationStatusEnum.success:
        return <LoginSuccess />;
      case AuthenticationStatusEnum.idle:
      default:
        return <FormBody />;
    }
  };

  return (
    <div
      className={clsx(
        styles.loginbar,
        { [styles.navbar]: navbar },
        { [styles.active]: loginbar },
      )}
    >
      <Content />
    </div>
  );
};

export default LoginBar;
