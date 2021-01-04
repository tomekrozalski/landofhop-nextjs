import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';

import DatabaseIcon from './DatabaseIcon';
import LanguageIcon from './LanguageIcon';
import styles from './OpenSubform.module.css';

type Props = {
  icon?: 'database' | 'language';
  label: string;
  onClick: () => void;
  reverse?: boolean;
};

const OpenSubform: React.FC<Props> = ({
  icon = 'database',
  label,
  onClick,
  reverse = false,
}) => (
  <button className={styles.button} onClick={onClick} type="button">
    {icon === 'database' && <DatabaseIcon />}
    {icon === 'language' && <LanguageIcon />}
    <div className={clsx(styles.title, { [styles.reverse]: reverse })}>
      <FormattedMessage id={label} />
    </div>
  </button>
);

export default OpenSubform;
