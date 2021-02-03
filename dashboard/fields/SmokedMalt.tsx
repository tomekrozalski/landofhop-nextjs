import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition, Switch } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const SmokedMalt: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="smokedMalt" />
    <Condition form={form} initialValue={false} name="smokedMalt" />
    <Switch form={form} name="smokedMalt" />
  </div>
);

export default SmokedMalt;
