import { useEffect } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import slugify from 'slugify';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  disabled?: boolean;
  form: string;
};

const Badge: React.FC<Props> = ({ disabled, form }) => {
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
      <Label form={form} name="badge" required />
      <TextInput
        error={formState.errors.badge}
        form={form}
        name="badge"
        ref={register}
        required
        touched={formState.touched.badge}
      />
    </div>
  );
};

export default Badge;
