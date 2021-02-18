import clsx from 'clsx';

import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { AlcoholScopeSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const AlcoholScope: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.conditionalFour)}>
    <Label form={form} name="alcoholScope" />
    <Condition
      form={form}
      initialValue={{
        label: '--',
        value: '-',
      }}
      name="alcoholScope"
    />
    <AlcoholScopeSelect defaultValue="" form={form} name="alcoholScope" />
  </div>
);

export default AlcoholScope;
