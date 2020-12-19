import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import isNil from 'lodash/isNil';
import omit from 'lodash/omit';

import styles from './Button.module.css';

const Button: React.FC = () => {
  const { formatMessage } = useIntl();
  const { pathname, push, query } = useRouter();
  const isActive = !isNil(query?.search);

  const toggleActive = () => {
    push(
      {
        pathname,
        query: isActive ? omit(query, ['search']) : { ...query, search: '' },
      },
      undefined,
      {
        shallow: true,
      },
    );
  };

  return (
    <button type="button" className={styles.button} onClick={toggleActive}>
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
