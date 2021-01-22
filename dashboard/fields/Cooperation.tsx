import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { InstitutionSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Cooperation: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="cooperation" />
    <Condition
      fields={[
        {
          name: 'cooperation',
          empty: [],
        },
      ]}
      form={form}
    />
    <InstitutionSelect form={form} isMulti name="cooperation" />
  </div>
);

export default Cooperation;
