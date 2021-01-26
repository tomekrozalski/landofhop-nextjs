import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import CheckmarkIcon from 'elements/icons/Success';
import styles from './Condition.module.css';

type Props = {
  clearWith?: any;
  empty: any;
  form: string;
  name: string;
};

const Condition: React.FC<Props> = ({
  clearWith = null,
  empty,
  form,
  name,
}) => {
  const { setValue, watch } = useFormContext();
  const value = watch(name);
  const isDisabled =
    clearWith && clearWith !== null
      ? Object.values(value).includes(null)
      : value === null;

  const ss = () => {
    if (clearWith) {
      Object.keys(clearWith).forEach(field => {
        setValue(
          `${name}.${field}`,
          isDisabled ? empty[field] : clearWith[field],
          {
            shouldValidate: true,
          },
        );
      });
    } else {
      setValue(name, isDisabled ? empty : clearWith, {
        shouldValidate: true,
      });
    }
  };

  return (
    <div
      className={clsx(styles.condition, { [styles.on]: !isDisabled })}
      onClick={ss}
    >
      <input
        type="checkbox"
        id={isDisabled ? `${form}-${name}` : ''}
        name={`${form}-${name}`}
        checked={!isDisabled}
        readOnly
      />
      {!isDisabled && <CheckmarkIcon />}
    </div>
  );
};

export default Condition;
