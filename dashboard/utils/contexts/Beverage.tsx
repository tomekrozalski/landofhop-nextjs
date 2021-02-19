import React, { useEffect, useState } from 'react';

import { Status } from 'utils/helpers/serverCall';
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
  status: Status.idle,
});

const Beverage: React.FC = ({ children }) => {
  const [id, setId] = useState<string | null>(null);
  const [editorial, setEditorial] = useState<FormValuesEditorial>(
    initialEditorial,
  );
  const [label, setLabel] = useState<FormValuesLabel>(initialLabel);
  const [producer, setProducer] = useState<FormValuesProducer>(initialProducer);
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

  const saveBeverage = (values: FormValuesEditorial) => {
    const normalizedData = beverageFormToAPI({
      id,
      label,
      producer,
      editorial: values,
    });

    console.log('saveBeverage -->', normalizedData);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve('abc');
      }, 2000);
    });

    // return checkTokenExpiration(token)
    //   .then(() => {
    //     return serverCall({
    //       path: 'beverage',
    //       method: beverageFormType === FormType.add ? 'POST' : 'PUT',
    //       body: JSON.stringify(normalizedData),
    //       token,
    //     })
    //       .then(async ({ badge, brand, shortId }) => {
    //         await window.removeEventListener('beforeunload', preventClose);

    //         navigate('/pl/update-beverage-images', {
    //           state: { badge, brand, shortId },
    //         });
    //       })
    //       .catch((e: any) => {
    //         // eslint-disable-next-line no-console
    //         console.error('Error:', e);
    //       });
    //   })
    //   .catch(() => {
    //     // eslint-disable-next-line no-console
    //     console.warn('Save beverage failed. Token is expired');
    //   });
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
