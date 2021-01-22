import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Barcode: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="barcode" />
    <Condition
      fields={[
        {
          name: 'barcode',
          empty: '',
        },
      ]}
      form={form}
    />
    <TextInput form={form} name="barcode" />
  </div>
);

export default Barcode;
