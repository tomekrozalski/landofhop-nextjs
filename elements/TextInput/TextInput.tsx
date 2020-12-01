import { forwardRef, CSSProperties } from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

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
  textarea?: boolean;
  type: 'text' | 'email' | 'password';
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  Props;

const TextInput = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    colorInvert,
    danger,
    error,
    form,
    name,
    style,
    textarea = false,
    touched,
    type = 'text',
    ...rest
  } = props;

  const inputProps = {
    id: `${form}-${name}`,
    name,
    ...rest,
  };

  console.log('inputProps', inputProps);

  return (
    <span
      className={clsx(styles.textinput, { [styles.colorInvert]: colorInvert })}
      style={style}
    >
      {danger && <DangerIcon className={styles.dangerIcon} />}
      {touched && error && <WarningIcon className={styles.warningIcon} />}
      {touched && !error && <SuccessIcon className={styles.successIcon} />}
      {textarea ? (
        <textarea {...inputProps} ref={ref} />
      ) : (
        <input {...inputProps} ref={ref} type={type} />
      )}
    </span>
  );
});

export default TextInput;
