import clsx from 'clsx';

import styles from './InlineSpinner.module.css';

const InlineSpinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={clsx(styles.spinner, className)}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" />
  </svg>
);

export default InlineSpinner;
