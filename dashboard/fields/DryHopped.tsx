import clsx from 'clsx';

import { IngredientType } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import { Condition } from 'dashboard/elements';
import { IngredientSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const DryHopped: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="dryHopped" />
    <Condition form={form} initialValue={[]} name="dryHopped" />
    <IngredientSelect
      defaultValue={[]}
      form={form}
      filterByType={IngredientType.hop}
      isMulti
      name="dryHopped"
    />
  </div>
);

export default DryHopped;
