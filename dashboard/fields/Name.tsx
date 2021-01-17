import { Fragment, useContext } from 'react';
import clsx from 'clsx';
import { useFieldArray } from 'react-hook-form';

import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons, OpenSubform } from 'dashboard/elements';
import { LanguageSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
  languageIcon?: boolean;
};

const Name: React.FC<Props> = ({ form, languageIcon }) => {
  const { setType } = useContext(ModalContext);

  const { fields, append, remove } = useFieldArray({
    name: 'name',
  });

  return (
    <div className={clsx(styles.grid, styles.double)}>
      <Label form={form} htmlFor="name[0].value" name="name" required />
      {fields.map(({ id, lang, value }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={value}
            form={form}
            name={`name[${index}].value`}
            style={{ gridColumn: '2/3' }}
          />
          <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`name[${index}].lang`}
            style={{ gridColumn: '3/4' }}
          />
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append({ lang: '', value: '' })}
              remove={() => remove(index)}
              withRemove={fields.length > 1}
            />
          )}
          {languageIcon && index === 0 && (
            <OpenSubform
              icon="language"
              label="admin.addNewLanguage.title"
              onClick={() => setType(ModalEnum.language)}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Name;
