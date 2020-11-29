import { FormattedMessage } from 'react-intl';

import styles from './FormBody.module.css';

const FormBody: React.FC = () => (
  <form className={styles.formBody} action="/admin" noValidate>
    <div>
      <label id="email">Email</label>
      <input type="email" name="email" />
    </div>
    <div>
      <label id="password">Password</label>
      <input type="password" name="password" />
    </div>
    <button type="submit">
      <FormattedMessage id="loginbar.submit" />
    </button>
  </form>
);

export default FormBody;
