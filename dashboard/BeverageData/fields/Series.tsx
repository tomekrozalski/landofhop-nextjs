import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons } from 'dashboard/BeverageData/elements';
import { LanguageSelect } from 'dashboard/BeverageData/elements/Select';
import styles from 'dashboard/BeverageData/Form.module.css';

const Series: React.FC = () => {
  const { formState, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'series',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form="label" htmlFor="series" name="series" required />
      {fields.map(({ id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            error={formState.errors.series?.[index]?.value}
            form="label"
            name={`series[${index}].value`}
            ref={register()}
            required
            style={{ gridColumn: '2/3' }}
            touched={formState.touched.series?.[index]?.value ?? false}
            defaultValue={value}
          />
          <LanguageSelect
            defaultValue={lang}
            name={`series[${index}].lang`}
            style={{ gridColumn: '3/4' }}
          />
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append({ lang: '', value: '' })}
              remove={() => remove(index)}
              withRemove={fields.length > 1}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Series;
