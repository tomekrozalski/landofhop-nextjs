import React, { CSSProperties } from 'react';
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
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  style?: CSSProperties;
  touched?: boolean;
  textarea?: boolean;
  type: 'text' | 'email' | 'password';
  value: string;
};

const TextInput: React.FC<Props> = ({
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
}) => {
  const inputProps = {
    id: `${form}-${name}`,
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
      {textarea ? (
        <textarea {...inputProps} />
      ) : (
        <input {...inputProps} type={type} />
      )}
    </span>
  );
};

export default TextInput;
