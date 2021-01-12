import clsx from 'clsx';

import SuccessIcon from 'elements/icons/Success';
import WarningIcon from 'elements/icons/Warning';
import styles from './FieldStatusIndicator.module.css';

type Props = {
  hidden?: boolean;
  invalid?: boolean;
  touched?: boolean;
  type?: 'input' | 'select';
};

const FieldStatusIndicator: React.FC<Props> = ({
  children,
  hidden,
  invalid,
  touched = false,
  type = 'input',
}) => (
  <>
    {!hidden && touched && invalid && (
      <WarningIcon
        className={clsx(styles.warningIcon, {
          [styles.select]: type === 'select',
        })}
      />
    )}
    {!hidden && touched && !invalid && (
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
