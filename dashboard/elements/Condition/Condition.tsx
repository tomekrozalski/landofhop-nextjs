import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import isObject from 'lodash/isObject';

import CheckmarkIcon from 'elements/icons/Success';
import styles from './Condition.module.css';

type Props = {
  emptyValue?: any;
  form: string;
  initialValue: any;
  name: string;
};

const Condition: React.FC<Props> = ({
  emptyValue = null,
  form,
  initialValue,
  name,
}) => {
  const { setValue, watch } = useFormContext();
  const value = watch(name);

  const isDisabled =
    isObject(value) && isObject(emptyValue)
      ? Object.values(value).includes(null)
      : value === null;

  const setFieldValue = (fieldName, initial, empty) => {
    setValue(fieldName, isDisabled ? initial : empty, {
      shouldValidate: true,
    });
  };

  const onInputClick = () => {
    if (isObject(emptyValue)) {
      Object.keys(emptyValue).forEach(field => {
        setFieldValue(
          `${name}.${field}`,
          initialValue[field],
          emptyValue[field],
        );
      });
    } else {
      setFieldValue(name, initialValue, emptyValue);
    }
  };

  return (
    <div
      className={clsx(styles.condition, { [styles.on]: !isDisabled })}
      onClick={onInputClick}
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
