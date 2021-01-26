import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Longitude: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="longitude" />
    <Condition form={form} initialValue={0} name="longitude" />
    <TextInput form={form} name="longitude" type="number" />
  </div>
);

export default Longitude;
