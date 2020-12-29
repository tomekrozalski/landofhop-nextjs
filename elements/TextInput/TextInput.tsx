import { forwardRef, CSSProperties } from 'react';
import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

import FieldStatusIndicator from 'elements/FieldStatusIndicator';
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
      <FieldStatusIndicator error={error} touched={touched}>
        <input {...inputProps} ref={ref} type={type} />
      </FieldStatusIndicator>
    </span>
  );
});

export default TextInput;
