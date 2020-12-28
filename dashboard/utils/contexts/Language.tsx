/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import serverCall, { Endpoints, Status } from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';

// import { LanguageOutput } from 'dashboard/utils/types/form';
import { Language as LanguageType } from 'dashboard/utils/types';

export const LanguageContext = React.createContext({
  // addNewLanguage: ({}: LanguageOutput) => new Promise(resolve => resolve()),
  // getLanguages: () => {},
  status: Status.idle,
  values: [] as LanguageType[],
});

const Language: React.FC = ({ children }) => {
  const { locale } = useIntl();
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(Status.idle);
  const [values, setValues] = useState<LanguageType[]>([]);

  const getLanguages = () => {
    setStatus(Status.pending);
  };

  useEffect(getLanguages, []);

  useEffect(() => {
    if (status === Status.pending) {
      serverCall(Endpoints.language, { token })
        .then((languages: LanguageType[]) => {
          const sorted = languages.sort((a: LanguageType, b: LanguageType) => {
            const first =
              a.name.find(item => item.language === locale) || a.name[0];
            const second =
              b.name.find(item => item.language === locale) || b.name[0];

            return first.value.localeCompare(second.value);
          });

          setValues(sorted);
          setStatus(Status.resolved);
        })
        .catch(() => {
          setStatus(Status.rejected);
        });
    }
  }, [status]);

  // const addNewLanguage = (request: LanguageOutput) =>
  //   new Promise((resolve, reject) => {
  //     setStatus(Status.pending);

  //     serverCall({
  //       body: JSON.stringify(request),
  //       method: 'POST',
  //       path: 'language',
  //       token,
  //     })
  //       .then((languages: LanguageType[]) => {
  //         setValues(languages);
  //         resolve();
  //       })
  //       .catch(reject);
  //   });

  return (
    <LanguageContext.Provider
      value={{
        // addNewLanguage,
        // getLanguages,
        status,
        values,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
