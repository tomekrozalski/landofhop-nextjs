import { CSSProperties } from 'react';
import { useController } from 'react-hook-form';
import clsx from 'clsx';

import FieldStatusIndicator from 'elements/FieldStatusIndicator';
import styles from './TextInput.module.css';

type Props = {
  colorInvert?: boolean;
  defaultValue?: any;
  disabled?: boolean;
  form: string;
  name: string;
  style?: CSSProperties;
  textarea?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
};

const TextInput: React.FC<Props> = ({
  colorInvert,
  defaultValue = '',
  disabled = false,
  form,
  name,
  style,
  textarea,
  type = 'text',
}) => {
  const {
    field: { ref, value, ...inputProps },
    meta: { invalid, isTouched },
  } = useController({
    name,
    defaultValue,
  });

  return (
    <span
      className={clsx(styles.textinput, {
        [styles.colorInvert]: colorInvert,
        [styles.touched]: isTouched,
      })}
      style={style}
    >
      <FieldStatusIndicator
        hidden={value === null}
        invalid={invalid}
        touched={isTouched}
      >
        {textarea ? (
          <textarea
            {...inputProps}
            id={`${form}-${name.replace('.', '-')}`}
            ref={ref}
            disabled={disabled || value === null}
            value={value === null ? '' : value}
          />
        ) : (
          <input
            {...inputProps}
            id={`${form}-${name.replace('.', '-')}`}
            ref={ref}
            type={type}
            disabled={disabled || value === null}
            value={value === null ? '' : value}
          />
        )}
      </FieldStatusIndicator>
    </span>
  );
};

export default TextInput;
