import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons, Plug } from 'dashboard/elements';
import { LanguageSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Style: React.FC<Props> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'style',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form={form} htmlFor="style[0].value" name="style" />
      {fields.map(({ id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={value}
            form={form}
            name={`style[${index}].value`}
            style={{ gridColumn: '2/3' }}
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`style[${index}].lang`}
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

export default Style;
