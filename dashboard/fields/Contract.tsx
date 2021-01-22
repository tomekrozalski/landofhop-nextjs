import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { InstitutionSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Contract: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="contract" />
    <Condition
      fields={[
        {
          name: 'contract',
          empty: { value: { value: '' } },
        },
      ]}
      form={form}
    />
    <InstitutionSelect form={form} name="contract" withUnknown />
  </div>
);

export default Contract;
