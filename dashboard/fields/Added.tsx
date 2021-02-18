import clsx from 'clsx';
import { format } from 'date-fns';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Added: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="added" />
    <Condition
      form={form}
      initialValue={format(new Date(), 'dd.MM.yyyy, HH:mm:ss')}
      name="added"
    />
    <TextInput form={form} name="added" />
  </div>
);

export default Added;
