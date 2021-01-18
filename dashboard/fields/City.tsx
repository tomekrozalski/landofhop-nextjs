import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons } from 'dashboard/elements';
import { LanguageSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const City: React.FC<Props> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'city',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form={form} htmlFor="city[0].value" name="city" required />
      {fields.map(({ id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={value}
            form={form}
            name={`city[${index}].value`}
            style={{ gridColumn: '2/3' }}
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`city[${index}].lang`}
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

export default City;
