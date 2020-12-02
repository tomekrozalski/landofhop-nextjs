import { forwardRef, CSSProperties } from 'react';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

import SuccessIcon from 'elements/icons/Success';
import WarningIcon from 'elements/icons/Warning';
import styles from './TextInput.module.css';

type Props = {
  colorInvert?: boolean;
  error?: FieldError;
  disabled?: boolean;
  form: string;
  name: string;
  ref: any;
  style?: CSSProperties;
  touched: boolean;
  type?: 'text' | 'email' | 'password';
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Props;

const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    colorInvert,
    error,
    form,
    name,
    style,
    touched,
    type = 'text',
    ...rest
  } = props;

  const inputProps = {
    id: `${form}-${name}`,
    name,
    ...rest,
  };

  return (
    <span
      className={clsx(styles.textinput, { [styles.colorInvert]: colorInvert })}
      style={style}
    >
      {touched && error && <WarningIcon className={styles.warningIcon} />}
      {touched && !error && <SuccessIcon className={styles.successIcon} />}
      <input {...inputProps} ref={ref} type={type} />
    </span>
  );
});

export default TextInput;
