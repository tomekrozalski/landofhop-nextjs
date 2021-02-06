import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Fullness: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.conditionalThree)}>
    <Label form={form} name="fullness" />
    <Condition form={form} initialValue={0} name="fullness" />
    <TextInput form={form} name="fullness" type="number" />
  </div>
);

export default Fullness;
