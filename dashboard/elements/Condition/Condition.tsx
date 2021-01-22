import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import isArray from 'lodash/isArray';

import CheckmarkIcon from 'elements/icons/Success';
import styles from './Condition.module.css';

type Props = {
  fields: {
    name: string;
    empty: any;
  }[];
  form: string;
  label?: string;
};

const Condition: React.FC<Props> = ({ fields, form, label }) => {
  const { setValue, watch } = useFormContext();
  const rawValues = watch(fields.map(({ name }) => name));
  const values = isArray(rawValues) ? rawValues : [rawValues];
  const isDisabled = values[0][fields[0].name] === null;

  return (
    <div
      className={clsx(styles.condition, { [styles.on]: !isDisabled })}
      onClick={() =>
        fields.forEach(({ name, empty }) => {
          setValue(name, isDisabled ? empty : null, {
            shouldValidate: true,
          });
        })
      }
    >
      <input
        type="checkbox"
        id={
          isDisabled
            ? `${form}-${fields.length === 1 ? fields[0].name : label}`
            : ''
        }
        name={`${form}-${fields[0].name}`}
        checked={!isDisabled}
        readOnly
      />
      {!isDisabled && <CheckmarkIcon />}
    </div>
  );
};

export default Condition;
