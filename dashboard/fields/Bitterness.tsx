import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Bitterness: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.conditionalThree)}>
    <Label form={form} name="bitterness" />
    <Condition form={form} initialValue={0} name="bitterness" />
    <TextInput form={form} name="bitterness" type="number" />
  </div>
);

export default Bitterness;
