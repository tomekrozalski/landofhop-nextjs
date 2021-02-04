import clsx from 'clsx';

import Label from 'elements/Label';
import { IngredientTypeSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const IngredientType: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.basic)}>
    <Label form={form} name="type" required />
    <IngredientTypeSelect
      defaultValue={{ label: '', value: '' }}
      form={form}
      name="type"
    />
  </div>
);

export default IngredientType;
