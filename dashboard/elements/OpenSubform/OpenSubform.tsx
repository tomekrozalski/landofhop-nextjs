import { FormattedMessage } from 'react-intl';

import DatabaseIcon from './DatabaseIcon';
import LanguageIcon from './LanguageIcon';
import styles from './OpenSubform.module.css';

type Props = {
  icon?: 'database' | 'language';
  label: string;
  onClick: () => void;
};

const OpenSubform: React.FC<Props> = ({
  icon = 'database',
  label,
  onClick,
}) => (
  <button className={styles.button} onClick={onClick} type="button">
    {icon === 'database' && <DatabaseIcon />}
    {icon === 'language' && <LanguageIcon />}
    <div className={styles.title}>
      <FormattedMessage id={label} />
    </div>
  </button>
);

export default OpenSubform;
