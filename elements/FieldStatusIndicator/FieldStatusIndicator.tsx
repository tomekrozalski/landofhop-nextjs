import { FieldError } from 'react-hook-form';
import clsx from 'clsx';

import SuccessIcon from 'elements/icons/Success';
import WarningIcon from 'elements/icons/Warning';
import styles from './FieldStatusIndicator.module.css';

type Props = {
  error?: FieldError;
  touched?: boolean;
  type?: 'input' | 'select';
};

const FieldStatusIndicator: React.FC<Props> = ({
  children,
  error,
  touched = false,
  type = 'input',
}) => (
  <>
    {touched && error && (
      <WarningIcon
        className={clsx(styles.warningIcon, {
          [styles.select]: type === 'select',
        })}
      />
    )}
    {touched && !error && (
      <SuccessIcon
        className={clsx(styles.successIcon, {
          [styles.select]: type === 'select',
        })}
      />
    )}
    {children}
  </>
);

export default FieldStatusIndicator;
