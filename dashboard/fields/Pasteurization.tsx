import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition, Switch } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Pasteurization: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="pasteurization" />
    <Condition form={form} initialValue="" name="pasteurization" />
    <Switch form={form} name="pasteurization" />
  </div>
);

export default Pasteurization;
