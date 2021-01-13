import { useEffect } from 'react';
import clsx from 'clsx';
import { useController, useFormContext } from 'react-hook-form';

import CheckmarkIcon from 'elements/icons/Success';
import styles from './Condition.module.css';

type Props = {
  empty: any;
  form: string;
  name: string;
};

const Condition: React.FC<Props> = ({ empty, form, name }) => {
  const { setValue, watch } = useFormContext();
  const value = watch(name);

  return (
    <div
      className={clsx(styles.condition, { [styles.on]: value !== null })}
      onClick={() => setValue(name, value === null ? empty : null)}
    >
      <input
        type="checkbox"
        id={value === null ? `${form}-${name}` : ''}
        name={`${form}-${name}`}
        checked={value !== null}
      />
      {value !== null && <CheckmarkIcon />}
    </div>
  );
};

export default Condition;
