import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Latitude: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="latitude" />
    <Condition
      fields={[
        {
          name: 'latitude',
          empty: 0,
        },
      ]}
      form={form}
    />
    <TextInput form={form} name="latitude" type="number" />
  </div>
);

export default Latitude;
