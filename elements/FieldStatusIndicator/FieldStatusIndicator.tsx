import clsx from 'clsx';

import SuccessIcon from 'elements/icons/Success';
import WarningIcon from 'elements/icons/Warning';
import styles from './FieldStatusIndicator.module.css';

type Props = {
  invalid?: boolean;
  touched?: boolean;
  type?: 'input' | 'select';
};

const FieldStatusIndicator: React.FC<Props> = ({
  children,
  invalid,
  touched = false,
  type = 'input',
}) => (
  <>
    {touched && invalid && (
      <WarningIcon
        className={clsx(styles.warningIcon, {
          [styles.select]: type === 'select',
        })}
      />
    )}
    {touched && !invalid && (
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
