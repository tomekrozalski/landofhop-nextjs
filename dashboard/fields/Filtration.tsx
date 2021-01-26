import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition, Switch } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Filtration: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="filtration" />
    <Condition form={form} initialValue="" name="filtration" />
    <Switch form={form} name="filtration" />
  </div>
);

export default Filtration;
