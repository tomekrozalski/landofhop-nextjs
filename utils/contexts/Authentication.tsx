/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
// import { differenceInSeconds, fromUnixTime } from 'date-fns';
// import jwt from 'jsonwebtoken';
// import isObject from 'lodash/isObject';

import { TopBarContext } from './TopBar';

export enum AuthenticationStatusEnum {
  idle,
  error,
  expired,
  loading,
  success,
  retry,
}

export const AuthenticationContext = React.createContext({
  authenticationStatus: AuthenticationStatusEnum.idle,
  // checkTokenExpiration: (token: string) =>
  //   new Promise(resolve => resolve(token)),
  isLoggedIn: false,
  logIn: ({}: { email: string; password: string }) => new Promise(() => {}),
  // logInAfterFailure: () => {},
  logOut: () => {},
  setAuthenticationStatus: (value: AuthenticationStatusEnum) => {
    value;
  },
  // token: '',
  // tokenExpirationDate: new Date(),
});

const Authentication: React.FC = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState(
    AuthenticationStatusEnum.idle,
  );
  // const [tokenExpirationDate, setTokenExpirationDate] = useState<Date>(
  //   new Date(),
  // );
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [token, setToken] = useState('');

  const { setLoginbar, setNavbar } = useContext(TopBarContext);

  useEffect(() => {
    setLoggedIn(authenticationStatus === AuthenticationStatusEnum.success);
  }, [authenticationStatus]);

  // const logInAfterFailure = () => {
  //   setAuthenticationStatus(AuthenticationStatusEnum.retry);
  // };

  const logOut = () => {
    if (window.localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }

    setLoginbar(false);
    // setTokenExpirationDate(new Date());
    setAuthenticationStatus(AuthenticationStatusEnum.idle);
  };

  // const tokenExpired = () => {
  //   setAuthenticationStatus(AuthenticationStatusEnum.expired);
  //   setLoginbar(true);
  //   setNavbar(true);
  // };

  // const checkTokenExpiration = (value: string) =>
  //   new Promise((resolve, reject) => {
  //     const decodedToken = jwt.decode(value, { complete: true });

  //     if (isObject(decodedToken)) {
  //       const expirationDate = fromUnixTime(decodedToken.payload.exp);

  //       if (differenceInSeconds(expirationDate, new Date()) > 10) {
  //         setToken(value);
  //         setTokenExpirationDate(expirationDate);
  //         setAuthenticationStatus(AuthenticationStatusEnum.success);
  //         resolve();
  //       } else {
  //         tokenExpired();
  //       }
  //     }

  //     reject();
  //   });

  useEffect(() => {
    const storageToken = window.localStorage.getItem('token');

    if (storageToken) {
      // checkTokenExpiration(storageToken).catch(tokenExpired);
    } else {
      setAuthenticationStatus(AuthenticationStatusEnum.idle);
    }
  }, []);

  const logIn = (formValues: { email: string; password: string }) => {
    return fetch(`${process.env.API_SERVER}/auth`, {
      method: 'POST',
      body: JSON.stringify(formValues),
    })
      .then(response => response.json())
      .then(response => {
        if (!response.token) {
          throw Error(response.message);
        }

        // checkTokenExpiration(response.token)
        //   .then(() => {
        //     window.localStorage.setItem('token', response.token);

        //     setTimeout(() => {
        //       setLoginbar(false);
        //       setNavbar(false);
        //     }, 2000);
        //   })
        //   .catch(logOut);
      })
      .catch(() => {
        setAuthenticationStatus(AuthenticationStatusEnum.error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        authenticationStatus,
        // checkTokenExpiration,
        isLoggedIn,
        logIn,
        // logInAfterFailure,
        logOut,
        setAuthenticationStatus,
        // token,
        // tokenExpirationDate,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
