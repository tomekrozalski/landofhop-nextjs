import React, { useContext, useEffect, useState } from 'react';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
import { CountryOutput } from 'dashboard/EditModal/Country/utils/formatValues';
import { Country as CountryType } from 'dashboard/utils/types';

export const CountryContext = React.createContext({
  addCountry: ({}: CountryOutput) => new Promise(resolve => resolve(true)),
  countries: [] as CountryType[],
  status: StatusEnum.idle,
});

const Country: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = () => {
    setStatus(StatusEnum.pending);

    serverCall(Endpoints.country, { token })
      .then((countries: CountryType[]) => {
        setCountries(countries);
        setStatus(StatusEnum.resolved);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  };

  useEffect(getCountries, []);

  const addCountry = (request: CountryOutput) =>
    new Promise((resolve, reject) => {
      setStatus(StatusEnum.pending);

      serverCall(Endpoints.addCountry, {
        method: 'POST',
        body: JSON.stringify(request),
        token,
      })
        .then((countries: CountryType[]) => {
          setCountries(countries);
          setStatus(StatusEnum.resolved);
          resolve(true);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
          reject();
        });
    });

  return (
    <CountryContext.Provider
      value={{
        addCountry,
        countries,
        status,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default Country;
