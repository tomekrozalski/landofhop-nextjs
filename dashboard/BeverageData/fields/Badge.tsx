import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import styles from 'dashboard/BeverageData/Form.module.css';

const Badge: React.FC = () => {
  const { formState, register, watch } = useFormContext();

  const name = watch('name', 'test');
  console.log('name', name);

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form="label" htmlFor="badge" name="badge" required />
      <TextInput
        error={formState.errors.badge}
        form="label"
        name="badge"
        ref={register}
        required
        touched={formState.touched.badge}
      />
    </div>
  );
};

export default Badge;
