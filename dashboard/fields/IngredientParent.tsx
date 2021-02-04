import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

import Label from 'elements/Label';
import { IngredientSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const IngredientParent: React.FC<Props> = ({ form }) => {
  const { setValue, watch } = useFormContext();
  const { type } = watch('type');

  useEffect(() => {
    setValue('parent', { label: '', value: '' });
  }, [type]);

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form={form} name="parent" />
      <IngredientSelect
        defaultValue={[]}
        disabled={!type}
        filterByType={type}
        form={form}
        name="parent"
      />
    </div>
  );
};

export default IngredientParent;
