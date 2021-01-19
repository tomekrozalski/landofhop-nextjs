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

const Remark: React.FC<Props> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'remark',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form={form} htmlFor="remark[0].value" name="remark" />
      {fields.map(({ id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={value}
            form={form}
            name={`remark[${index}].value`}
            style={{ gridColumn: '2/3' }}
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`remark[${index}].lang`}
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

export default Remark;
