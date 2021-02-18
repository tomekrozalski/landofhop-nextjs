import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { ClaritySelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Clarity: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="clarity" />
    <Condition
      form={form}
      initialValue={{ value: { value: '' } }}
      name="clarity"
    />
    <ClaritySelect defaultValue="" form={form} name="clarity" />
  </div>
);

export default Clarity;
