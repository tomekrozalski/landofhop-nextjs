import { useEffect } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import slugify from 'slugify';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import styles from 'dashboard/BeverageData/Form.module.css';

type Props = {
  disabled?: boolean;
};

const Badge: React.FC<Props> = ({ disabled }) => {
  const { formState, register, setValue, watch } = useFormContext();
  const name = watch('name');

  useEffect(() => {
    if (!disabled) {
      setValue('badge', slugify(name[0].value, { lower: true, strict: true }), {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [name[0].value]);

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
