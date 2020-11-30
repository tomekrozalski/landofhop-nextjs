import clsx from 'clsx';

import styles from './Button.module.css';

export enum ButtonStyle {
  moveBack,
  goOn,
}

type Props = {
  appearance?: ButtonStyle;
  disabled?: boolean;
  isSubmitting?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'reset' | 'submit';
};

const Button: React.FC<Props> = ({
  appearance = ButtonStyle.goOn,
  children,
  isSubmitting,
  type = 'button',
  ...props
}) => (
  <button
    className={clsx(
      styles.button,
      { [styles.submitting]: isSubmitting },
      { [styles.moveBack]: appearance === ButtonStyle.moveBack },
      { [styles.goOn]: appearance === ButtonStyle.goOn },
    )}
    type={type}
    {...props}
  >
    <span>{children}</span>
    {isSubmitting && (
      <svg
        className={styles.spinner}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" />
      </svg>
    )}
  </button>
);

export default Button;
