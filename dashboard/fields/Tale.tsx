import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons, Markdown, Plug } from 'dashboard/elements';
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
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form={form} htmlFor="tale[0].value" name="tale" />
      {fields.map(({ article, id, lang, lead }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={lead}
            form={form}
            name={`tale[${index}].lead`}
            style={{ gridColumn: '2/3' }}
            textarea
          />
          <TextInput
            defaultValue={article}
            form={form}
            name={`tale[${index}].article`}
            style={{ gridColumn: '2/3' }}
            textarea
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`tale[${index}].lang`}
            style={{ gridColumn: '2/3' }}
          />
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append({ article: '', lang: '', lead: '' })}
              remove={() => remove(index)}
              withRemove
            />
          )}
          <Markdown name={`tale[${index}].lead`} />
          <Markdown name={`tale[${index}].article`} />
        </Fragment>
      ))}
      {!fields.length && (
        <Plug append={() => append({ article: '', lang: '', lead: '' })} />
      )}
    </div>
  );
};

export default Tale;
