import clsx from 'clsx';

import InlineSpinner from 'elements/InlineSpinner';
import styles from './Button.module.css';

export enum ButtonStyle {
  reset = 'reset',
  regular = 'regular',
}

type Props = {
  appearance?: ButtonStyle;
  disabled?: boolean;
  isSubmitting?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'reset' | 'submit';
};

const Button: React.FC<Props> = ({
  appearance = ButtonStyle.regular,
  children,
  isSubmitting,
  type = 'button',
  ...props
}) => (
  <button
    className={clsx(
      styles.button,
      { [styles.submitting]: isSubmitting },
      styles[appearance],
    )}
    type={type}
    {...props}
  >
    <span>{children}</span>
    {isSubmitting && <InlineSpinner />}
  </button>
);

export default Button;
