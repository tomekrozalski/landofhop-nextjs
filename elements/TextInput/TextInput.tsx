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
  subname?: string;
  textarea?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
};

const TextInput: React.FC<Props> = ({
  colorInvert,
  defaultValue,
  disabled = false,
  form,
  name,
  style,
  subname,
  textarea,
  type = 'text',
}) => {
  const {
    field: { ref, value: rawValue, onChange, ...inputProps },
    meta: { invalid, isTouched },
  } = useController({
    name,
    defaultValue: defaultValue || '',
  });

  const id = subname ? `${form}-${name}-${subname}` : `${form}-${name}`;
  const value = subname ? rawValue?.[subname] ?? null : rawValue;
  const onNestedChange = e =>
    onChange({ ...rawValue, [subname]: e.target.value });

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
            id={id}
            onChange={subname ? onNestedChange : onChange}
            ref={ref}
            disabled={disabled || value === null}
            value={value === null ? '' : value}
          />
        ) : (
          <input
            {...inputProps}
            id={id}
            onChange={subname ? onNestedChange : onChange}
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
