import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { InstitutionSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const OwnedBy: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="ownedBy" />
    <Condition
      fields={[
        {
          name: 'ownedBy',
          empty: [],
        },
      ]}
      form={form}
    />
    <InstitutionSelect form={form} name="ownedBy" />
  </div>
);

export default OwnedBy;
