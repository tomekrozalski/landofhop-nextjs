import { FormattedMessage } from 'react-intl';

import CloseIcon from 'elements/icons/Close';
import styles from './Select.module.css';

const Error = () => (
  <div className={styles.error}>
    <CloseIcon className={styles.errorIcon} />
    <FormattedMessage id="admin.loadError" />
  </div>
);

export default Error;
