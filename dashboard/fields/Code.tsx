import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Code: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.basic)}>
    <Label form={form} name="code" required />
    <TextInput form={form} name="code" />
  </div>
);

export default Code;
