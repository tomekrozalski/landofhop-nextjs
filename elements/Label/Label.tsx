import { FormattedMessage } from 'react-intl';

import styles from './Label.module.css';

type Props = {
  form: string;
  htmlFor?: string;
  name: string;
  required?: boolean;
};

const Label: React.FC<Props> = ({ form, htmlFor, name, required = false }) => (
  <label className={styles.label} htmlFor={`${form}-${htmlFor || name}`}>
    <FormattedMessage id={`global.${name}`} />
    {required && <span className={styles.required}>*</span>}
  </label>
);

export default Label;
