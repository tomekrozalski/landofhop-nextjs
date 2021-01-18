import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { PlaceSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Place: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="place" />
    <Condition form={form} name="place" empty="" />
    <PlaceSelect defaultValue="" form={form} name="place" />
  </div>
);

export default Place;
