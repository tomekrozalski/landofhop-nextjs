import { useContext } from 'react';
import clsx from 'clsx';

import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import Label from 'elements/Label';
import { Condition, OpenSubform } from 'dashboard/elements';
import { IngredientSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const IngredientsList: React.FC<Props> = ({ form }) => {
  const { setType } = useContext(ModalContext);

  return (
    <div className={clsx(styles.grid, styles.optional)}>
      <Label form={form} name="ingredientsList" />
      <Condition form={form} initialValue={[]} name="ingredientsList" />
      <IngredientSelect defaultValue={[]} form={form} name="ingredientsList" />
      <OpenSubform
        label="admin.addNewIngredient"
        onClick={() => setType(ModalEnum.ingredient)}
      />
    </div>
  );
};

export default IngredientsList;
