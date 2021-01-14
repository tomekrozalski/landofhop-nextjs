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
  type?: 'text' | 'email' | 'password';
};

const TextInput: React.FC<Props> = ({
  colorInvert,
  defaultValue,
  disabled = false,
  form,
  name,
  style,
  type = 'text',
}) => {
  const {
    field: { ref, value, ...inputProps },
    meta: { invalid, isTouched },
  } = useController({
    name,
    defaultValue: defaultValue || '',
  });

  return (
    <span
      className={clsx(styles.textinput, { [styles.colorInvert]: colorInvert })}
      style={style}
    >
      <FieldStatusIndicator
        hidden={value === null}
        invalid={invalid}
        touched={isTouched}
      >
        <input
          {...inputProps}
          id={`${form}-${name}`}
          ref={ref}
          type={type}
          disabled={disabled || value === null}
          value={value === null ? '' : value}
        />
      </FieldStatusIndicator>
    </span>
  );
};

export default TextInput;
