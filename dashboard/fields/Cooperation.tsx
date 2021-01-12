import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { InstitutionSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

const Cooperation: React.FC = () => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form="label" htmlFor="cooperation" name="cooperation" />
    <Condition name="cooperation" empty={[]} />
    <InstitutionSelect defaultValue={[]} isMulti name="cooperation" />
  </div>
);

export default Cooperation;
