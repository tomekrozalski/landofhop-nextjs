import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons } from 'dashboard/BeverageData/elements';
import { LanguageSelect } from 'dashboard/BeverageData/elements/Select';
import styles from 'dashboard/BeverageData/Form.module.css';

const Name: React.FC = () => {
  const { formState, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'name',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form="label" htmlFor="name" name="name" required />
      {fields.map(({ id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            error={formState.errors.name}
            form="label"
            name={`name[${index}].value`}
            ref={register()}
            required
            style={{ gridColumn: '2/3' }}
            touched={formState.touched.name}
            defaultValue={value}
          />
          <LanguageSelect
            error={formState.errors.name}
            form="label"
            name={`name[${index}].lang`}
            ref={register()}
            required
            style={{ gridColumn: '3/4' }}
            touched={formState.touched.name}
            defaultValue={lang}
          />
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append({ lang: '', value: 'test' })}
              remove={() => remove(index)}
              withRemove={fields.length > 1}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Name;
