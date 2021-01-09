import { FormattedMessage } from 'react-intl';

import styles from './Select.module.css';

const Loading = () => (
  <div className={styles.loading}>
    <FormattedMessage id="global.loading" />
  </div>
);

export default Loading;
