import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Sweetness: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.conditionalThree)}>
    <Label form={form} name="sweetness" />
    <Condition form={form} initialValue={0} name="sweetness" />
    <TextInput form={form} name="sweetness" type="number" />
  </div>
);

export default Sweetness;
