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

export const BeverageContext = React.createContext({
  editorial: initialEditorial as FormValuesEditorial,
  label: initialLabel as FormValuesLabel,
  producer: initialProducer as FormValuesProducer,
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

  return (
    <BeverageContext.Provider
      value={{
        editorial,
        label,
        producer,
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
