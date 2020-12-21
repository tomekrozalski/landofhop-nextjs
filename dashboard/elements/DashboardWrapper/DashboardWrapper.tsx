import React, { useContext, useEffect } from 'react';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
} from 'utils/contexts';
import Spinner from 'elements/Spinner';
import DashboardStateProvider from 'dashboard/utils/contexts';
import NotLoggedIn from './NotLoggedIn';

const DashboardWrapper = (Component: any) => (props: any) => {
  const { authenticationStatus, checkTokenExpiration, token } = useContext(
    AuthenticationContext,
  );

  useEffect(() => {
    if (token) {
      checkTokenExpiration(token).catch(() => {
        // eslint-disable-next-line no-console
        console.warn('logged out');
      });
    }
  }, [token]);

  switch (authenticationStatus) {
    case AuthenticationStatusEnum.pending:
      return <Spinner />;
    case AuthenticationStatusEnum.resolved:
    case AuthenticationStatusEnum.expired:
      return (
        <DashboardStateProvider>
          <Component {...props} />
        </DashboardStateProvider>
      );
    default:
      return <NotLoggedIn />;
  }
};

export default DashboardWrapper;
