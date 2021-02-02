import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray } from 'react-hook-form';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons, Markdown, Plug, Switch } from 'dashboard/elements';
import { LanguageSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const IngredientsDescription: React.FC<Props> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'ingredientsDescription',
  });

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label
        form={form}
        htmlFor="ingredientsDescription[0].value"
        name="ingredientsDescription"
      />
      {fields.map(({ complete, id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={value}
            form={form}
            name={`ingredientsDescription[${index}].value`}
            style={{ gridColumn: '2/3' }}
            textarea
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`ingredientsDescription[${index}].lang`}
            style={{ gridColumn: '2/3' }}
          />
          <div
            style={{
              'grid-column': '1 / 3',
              display: 'grid',
            }}
          >
            <Label
              form={form}
              htmlFor={`ingredientsDescription[${index}].complete`}
              name="areIngredientsComplete"
            />
            <Switch
              form={form}
              name={`ingredientsDescription[${index}].complete`}
            />
          </div>
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append({ article: '', lang: '', lead: '' })}
              remove={() => remove(index)}
              withRemove
            />
          )}
          <Markdown name={`ingredientsDescription[${index}].value`} />
        </Fragment>
      ))}
      {!fields.length && (
        <Plug
          append={() =>
            append({ complete: true, lang: '', value: '• , • , • ' })
          }
          wide
        />
      )}
    </div>
  );
};

export default IngredientsDescription;
