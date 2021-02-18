import clsx from 'clsx';
import { format } from 'date-fns';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Updated: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="updated" />
    <Condition
      form={form}
      initialValue={format(new Date(), 'dd.MM.yyyy, HH:mm:ss')}
      name="updated"
    />
    <TextInput form={form} name="updated" />
  </div>
);

export default Updated;
