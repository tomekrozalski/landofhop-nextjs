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
    <Condition empty={[]} form={form} name="ownedBy" />
    <InstitutionSelect defaultValue="" form={form} name="ownedBy" />
  </div>
);

export default OwnedBy;
