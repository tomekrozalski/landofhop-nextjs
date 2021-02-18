import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Color: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="color" />
    <Condition form={form} initialValue="#ffffff" name="color" />
    <TextInput form={form} name="color" />
  </div>
);

export default Color;
