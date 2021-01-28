import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons, Plug } from 'dashboard/elements';
import { LanguageSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';
import agedStyles from './Aged.module.css';
import { AgedType } from '.';

type Props = {
  form: string;
};

const Aged: React.FC<Props> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'aged',
  });

  const emptyAged = {
    previousContent: null,
    time: null,
    type: null,
    wood: null,
  };

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form={form} htmlFor="aged[0].value" name="aged" />
      {fields.map(({ id, type }, index) => (
        <Fragment key={id}>
          <fieldset className={agedStyles.aged}>
            <h4 className={agedStyles.title}>
              <FormattedMessage
                id="admin.beverage.aged.title"
                values={{ order: index + 1 }}
              />
            </h4>
            <AgedType
              defaultValue={type}
              form={form}
              name={`aged[${index}].type`}
            />
            {/* <AgedWood index={index} /> */}
            {/* <AgedTime formName={formName} index={index} /> */}
            {/* <PreviousContent formName={formName} index={index} /> */}
          </fieldset>
          {/* <TextInput
            defaultValue={value}
            form={form}
            name={`aged[${index}].value`}
            style={{ gridColumn: '2/3' }}
          /> */}
          {/* <LanguageSelect
            defaultValue={lang}
            form={form}
            name={`aged[${index}].lang`}
            style={{ gridColumn: '3/4' }}
          /> */}
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append(emptyAged)}
              remove={() => remove(index)}
              withRemove
            />
          )}
        </Fragment>
      ))}
      {!fields.length && <Plug append={() => append(emptyAged)} wide />}
    </div>
  );
};

export default Aged;
