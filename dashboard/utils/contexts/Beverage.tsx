import React, { useEffect, useState } from 'react';

import { Status } from 'utils/helpers/serverCall';
// import { AuthenticationContext } from 'utils/contexts';
// import { FormType, Subform as SubformEnum } from 'dashboard/utils/enums';
// import { LanguageContext } from 'dashboard/utils/contexts';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';
// import { FormValues as FormValuesProducer } from 'dashboard/BeverageData/Producer/utils';
// import { FormValues as FormValuesEditorial } from 'dashboard/BeverageData/Editorial/utils';
import { label as initialLabel } from '../initialValues/beverage';

export const BeverageContext = React.createContext({
  // editorial: initialEditorialValues as FormValuesEditorial,
  editorial: {},
  label: initialLabel as FormValuesLabel,
  producer: {},
  status: Status.idle,
});

const Beverage: React.FC = ({ children }) => {
  const [editorial, setEditorial] = useState({});
  const [label, setLabel] = useState<FormValuesLabel>(initialLabel);
  const [producer, setProducer] = useState({});
  const [status, setStatus] = useState(Status.idle);

  const preventClose = (e: Event) => {
    e.preventDefault();
    e.returnValue = true;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <BeverageContext.Provider
      value={{
        editorial,
        label,
        producer,
        status,
      }}
    >
      {children}
    </BeverageContext.Provider>
  );
};

export default Beverage;
