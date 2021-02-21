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

  const emptyIngredientsDescription = {
    complete: true,
    language: '',
    value: '• , • , • ',
  };

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label
        form={form}
        htmlFor="ingredientsDescription[0].value"
        name="ingredientsDescription"
      />
      {fields.map(({ complete, id, language, value }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={value}
            form={form}
            name={`ingredientsDescription[${index}].value`}
            style={{ gridColumn: '2/3' }}
            textarea
          />
          <LanguageSelect
            defaultValue={language}
            form={form}
            name={`ingredientsDescription[${index}].language`}
            style={{ gridColumn: '2/3' }}
          />
          <div className={styles.ingredientsCompleteWrapper}>
            <Label
              form={form}
              htmlFor={`ingredientsDescription[${index}].complete`}
              name="areIngredientsComplete"
            />
            <Switch
              defaultValue={complete}
              form={form}
              name={`ingredientsDescription[${index}].complete`}
            />
          </div>
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append(emptyIngredientsDescription)}
              remove={() => remove(index)}
              withRemove
            />
          )}
          <Markdown name={`ingredientsDescription[${index}].value`} />
        </Fragment>
      ))}
      {!fields.length && (
        <Plug append={() => append(emptyIngredientsDescription)} />
      )}
    </div>
  );
};

export default IngredientsDescription;
