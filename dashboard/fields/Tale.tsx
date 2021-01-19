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

const Tale: React.FC<Props> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'tale',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form={form} htmlFor="tale[0].value" name="tale" />
      {fields.map(({ article, id, lang, lead }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={lead}
            form={form}
            name={`tale[${index}].lead`}
            style={{ gridColumn: '2/4' }}
          />
          <TextInput
            defaultValue={article}
            form={form}
            name={`tale[${index}].article`}
            style={{ gridColumn: '2/4' }}
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`tale[${index}].lang`}
            style={{ gridColumn: '2/4' }}
          />
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append({ article: '', lang: '', lead: '' })}
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

export default Tale;
