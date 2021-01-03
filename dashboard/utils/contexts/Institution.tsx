import React, { useContext, useEffect, useState } from 'react';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
// import { InstitutionOutput } from 'dashboard/utils/types/form';
import { Institution as InstitutionType } from 'dashboard/utils/types';

export const InstitutionContext = React.createContext({
  // addNewInstitution: ({}: InstitutionOutput) =>
  //   new Promise(resolve => resolve()),
  getInstitutions: () => {},
  status: StatusEnum.idle,
  values: [] as InstitutionType[],
});

const Institution: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState<InstitutionType[]>([]);

  const getInstitutions = () => {
    setStatus(StatusEnum.pending);
  };

  useEffect(getInstitutions, []);

  useEffect(() => {
    if (status === StatusEnum.pending) {
      serverCall(Endpoints.institution, { token })
        .then((institutions: InstitutionType[]) => {
          console.log('1', institutions);
          setValues(institutions);
          setStatus(StatusEnum.resolved);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [status]);

  // const addNewInstitution = (request: InstitutionOutput) =>
  //   new Promise((resolve, reject) => {
  //     setStatus(StatusEnum.pending);

  //     serverCall({
  //       body: JSON.stringify(request),
  //       method: 'POST',
  //       path: 'institution',
  //       token,
  //     })
  //       .then((institutions: InstitutionType[]) => {
  //         setValues(institutions);
  //         setStatus(StatusEnum.fulfilled);
  //         resolve();
  //       })
  //       .catch(() => {
  //         setStatus(StatusEnum.rejected);
  //         reject();
  //       });
  //   });

  return (
    <InstitutionContext.Provider
      value={{
        // addNewInstitution,
        getInstitutions,
        status,
        values,
      }}
    >
      {children}
    </InstitutionContext.Provider>
  );
};

export default Institution;
