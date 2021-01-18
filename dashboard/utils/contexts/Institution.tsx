import React, { useContext, useEffect, useState } from 'react';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
import { InstitutionOutput } from 'dashboard/EditModal/Institution/utils/formatValues';
import { Institution as InstitutionType } from 'dashboard/utils/types';

export const InstitutionContext = React.createContext({
  addNewInstitution: ({}: InstitutionOutput) =>
    new Promise(resolve => resolve(true)),
  institutions: [] as InstitutionType[],
  status: StatusEnum.idle,
});

const Institution: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [institutions, setInstitutions] = useState<InstitutionType[]>([]);

  const getInstitutions = () => {
    setStatus(StatusEnum.pending);

    serverCall(Endpoints.institution, { token })
      .then((institutions: InstitutionType[]) => {
        setInstitutions(institutions);
        setStatus(StatusEnum.resolved);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  };

  useEffect(getInstitutions, []);

  const addNewInstitution = (request: InstitutionOutput) =>
    new Promise((resolve, reject) => {
      setStatus(StatusEnum.pending);

      serverCall(Endpoints.addInstitution, {
        method: 'POST',
        body: JSON.stringify(request),
        token,
      })
        .then((institutions: InstitutionType[]) => {
          setInstitutions(institutions);
          setStatus(StatusEnum.resolved);
          resolve(true);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
          reject();
        });
    });

  return (
    <InstitutionContext.Provider
      value={{
        addNewInstitution,
        institutions,
        status,
      }}
    >
      {children}
    </InstitutionContext.Provider>
  );
};

export default Institution;
