import { useIntl } from 'react-intl';
import clsx from 'clsx';

import styles from './Button.module.css';

type Props = {
  isActive: boolean;
  setActive: (value: boolean) => void;
};

const Button: React.FC<Props> = ({ isActive, setActive }) => {
  const { formatMessage } = useIntl();

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => setActive(!isActive)}
    >
      <i
        aria-label={formatMessage({
          id: isActive ? 'global.close' : 'global.search',
        })}
        className={clsx(styles.icon, {
          [styles.active]: isActive,
        })}
      />
    </button>
  );
};

export default Button;
