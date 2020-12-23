import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import styles from 'dashboard/BeverageData/Form.module.css';

const Name: React.FC = () => {
  const { formState, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'name',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form="label" htmlFor="name" name="name" required />
      {fields.map(({ id }, index) => (
        <Fragment key={id}>
          <TextInput
            error={formState.errors.name}
            form="label"
            name={`name[${index}].value`}
            ref={register()}
            required
            style={{ gridColumn: '2/3' }}
            touched={formState.touched.name}
          />
          <TextInput
            error={formState.errors.name}
            form="label"
            name={`name[${index}].lang`}
            ref={register()}
            required
            style={{ gridColumn: '3/4' }}
            touched={formState.touched.name}
          />
          {fields.length === index + 1 && (
            <>
              <button onClick={() => remove(index)}>remove</button>
              <button onClick={() => append({})}>append</button>
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Name;
