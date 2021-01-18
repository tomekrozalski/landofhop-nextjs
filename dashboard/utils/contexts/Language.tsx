import React, { useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
import { LanguageOutput } from 'dashboard/EditModal/Language/utils/formatValues';
import { Language as LanguageType } from 'dashboard/utils/types';

export const LanguageContext = React.createContext({
  addNewLanguage: ({}: LanguageOutput) => new Promise(resolve => resolve(true)),
  languages: [] as LanguageType[],
  status: StatusEnum.idle,
});

const Language: React.FC = ({ children }) => {
  const { locale } = useIntl();
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [languages, setLanguages] = useState<LanguageType[]>([]);

  const getLanguages = () => {
    setStatus(StatusEnum.pending);

    serverCall(Endpoints.language, { token })
      .then((languages: LanguageType[]) => {
        const sorted = languages.sort((a: LanguageType, b: LanguageType) => {
          const first =
            a.name.find(item => item.language === locale) || a.name[0];
          const second =
            b.name.find(item => item.language === locale) || b.name[0];

          return first.value.localeCompare(second.value);
        });

        setLanguages(sorted);
        setStatus(StatusEnum.resolved);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  };

  useEffect(getLanguages, []);

  const addNewLanguage = (request: LanguageOutput) =>
    new Promise((resolve, reject) => {
      setStatus(StatusEnum.pending);

      serverCall(Endpoints.addLanguage, {
        method: 'POST',
        body: JSON.stringify(request),
        token,
      })
        .then((languages: LanguageType[]) => {
          setLanguages(languages);
          setStatus(StatusEnum.resolved);
          resolve(true);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
          reject();
        });
    });

  return (
    <LanguageContext.Provider
      value={{
        addNewLanguage,
        languages,
        status,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
