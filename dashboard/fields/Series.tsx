import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons, Plug } from 'dashboard/elements';
import { LanguageSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Series: React.FC<Props> = ({ form }) => {
  const { formState, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'series',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form={form} htmlFor="series[0].value" name="series" />
      {fields.map(({ id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            error={formState.errors.series?.[index]?.value}
            form={form}
            name={`series[${index}].value`}
            ref={register()}
            required
            style={{ gridColumn: '2/3' }}
            touched={formState.touched.series?.[index]?.value ?? false}
            defaultValue={value}
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`series[${index}].lang`}
            style={{ gridColumn: '3/4' }}
          />
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append({ lang: '', value: '' })}
              remove={() => remove(index)}
              withRemove
            />
          )}
        </Fragment>
      ))}
      {!fields.length && (
        <Plug append={() => append({ lang: '', value: '' })} wide />
      )}
    </div>
  );
};

export default Series;
