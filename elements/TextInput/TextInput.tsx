import { forwardRef, CSSProperties } from 'react';
import clsx from 'clsx';

import { DangerIcon, SuccessIcon, WarningIcon } from 'elements/icons';
import styles from './TextInput.module.css';

type Props = {
  colorInvert?: boolean;
  danger?: boolean;
  error?: boolean;
  disabled?: boolean;
  form: string;
  name: string;
  ref: any;
  style?: CSSProperties;
  touched?: boolean;
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
    danger,
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
      {danger && <DangerIcon className={styles.dangerIcon} />}
      {touched && error && <WarningIcon className={styles.warningIcon} />}
      {touched && !error && <SuccessIcon className={styles.successIcon} />}
      <input {...inputProps} ref={ref} type={type} />
    </span>
  );
});

export default TextInput;
