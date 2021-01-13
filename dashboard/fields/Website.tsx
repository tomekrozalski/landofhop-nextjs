import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Website: React.FC<Props> = ({ form }) => {
  const { formState, register } = useFormContext();

  return (
    <div className={clsx(styles.grid, styles.optional)}>
      <Label form={form} name="website" />
      <Condition form={form} name="website" empty="" />
      <TextInput
        error={formState.errors.website}
        form={form}
        name="website"
        ref={register}
        touched={formState.touched.website}
      />
    </div>
  );
};

export default Website;
