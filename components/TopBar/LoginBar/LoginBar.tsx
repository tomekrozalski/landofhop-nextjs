import { useContext } from 'react';
import clsx from 'clsx';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
  TopBarContext,
} from 'utils/contexts';
import { FormBody } from '.';
import styles from './LoginBar.module.css';
// import { initialFormValues, validationSchema } from './utils';
// import { FormBody, LoginError, LoginSuccess, TokenExpired } from '.';

const LoginBar: React.FC = () => {
  const { authenticationStatus, logIn } = useContext(AuthenticationContext);
  const { loginbar, navbar } = useContext(TopBarContext);

  const renderContent = () => {
    switch (authenticationStatus) {
      case AuthenticationStatusEnum.error:
        // return <LoginError />;
        return <div>LoginError</div>;
      case AuthenticationStatusEnum.expired:
        // return <TokenExpired />;
        return <div>TokenExpired</div>;
      case AuthenticationStatusEnum.success:
        // return <LoginSuccess />;
        return <div>LoginSuccess</div>;
      case AuthenticationStatusEnum.loading:
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
      {renderContent()}
      {/* <Formik
        initialValues={initialFormValues}
        onSubmit={(values, { setSubmitting }) => {
          logIn(values).then(() => {
            setSubmitting(false);
          });
        }}
        validationSchema={validationSchema}
      >
        {renderContent()}
      </Formik> */}
    </div>
  );
};

export default LoginBar;
