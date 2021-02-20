import React, { useContext, useEffect, useState } from 'react';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
import {
  FormValues as FormValuesLabel,
  initialValues as initialLabel,
} from 'dashboard/BeverageData/Label/utils';
import {
  FormValues as FormValuesProducer,
  initialValues as initialProducer,
} from 'dashboard/BeverageData/Producer/utils';
import {
  FormValues as FormValuesEditorial,
  initialValues as initialEditorial,
} from 'dashboard/BeverageData/Editorial/utils';
import beverageFormToAPI from 'dashboard/utils/normalizers/beverageFormToAPI';

export const BeverageContext = React.createContext({
  editorial: initialEditorial as FormValuesEditorial,
  label: initialLabel as FormValuesLabel,
  producer: initialProducer as FormValuesProducer,
  saveBeverage: (values: FormValuesEditorial) =>
    new Promise(() => {
      values;
    }),
  setEditorial: (value: FormValuesEditorial) => {
    value;
  },
  setLabel: (value: FormValuesLabel) => {
    value;
  },
  setProducer: (value: FormValuesProducer) => {
    value;
  },
  status: StatusEnum.idle,
});

const Beverage: React.FC = ({ children }) => {
  const { checkTokenExpiration, token } = useContext(AuthenticationContext);
  const [id, setId] = useState<string | null>(null);
  const [editorial, setEditorial] = useState<FormValuesEditorial>(
    initialEditorial,
  );
  const [label, setLabel] = useState<FormValuesLabel>(initialLabel);
  const [producer, setProducer] = useState<FormValuesProducer>(initialProducer);
  const [status, setStatus] = useState(StatusEnum.idle);

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

  const saveBeverage = (values: FormValuesEditorial) => {
    const normalizedData = beverageFormToAPI({
      id,
      label,
      producer,
      editorial: values,
    });

    return checkTokenExpiration(token).then(() => {
      return serverCall(Endpoints.saveBeverage, {
        method: 'POST',
        body: JSON.stringify(normalizedData),
        token,
      })
        .then(async ({ badge, brand, shortId }) => {
          await window.removeEventListener('beforeunload', preventClose);

          console.log('-->', badge, brand, shortId);

          // navigate('/pl/update-beverage-images', {
          //   state: { badge, brand, shortId },
          // });
        })
        .catch(error => {
          console.log({ error });
        });
    });
  };

  return (
    <BeverageContext.Provider
      value={{
        editorial,
        label,
        producer,
        saveBeverage,
        setEditorial,
        setLabel,
        setProducer,
        status,
      }}
    >
      {children}
    </BeverageContext.Provider>
  );
};

export default Beverage;
