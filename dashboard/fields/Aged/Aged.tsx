import { Fragment } from 'react';
import clsx from 'clsx';
import { useFieldArray } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import Label from 'elements/Label';
import { ActionButtons, Plug } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';
import agedStyles from './Aged.module.css';
import { AgedTime, AgedType, AgedWood, PreviousContent } from '.';

type Props = {
  form: string;
};

const Aged: React.FC<Props> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'aged',
  });

  const emptyAged = {
    previousContent: null,
    time: {
      value: null,
      unit: null,
    },
    type: null,
    wood: null,
  };

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form={form} htmlFor="aged[0].value" name="aged" />
      {fields.map(({ id, previousContent, time, type, wood }, index) => (
        <Fragment key={id}>
          <fieldset className={agedStyles.aged}>
            <h4 className={agedStyles.title}>
              <FormattedMessage
                id="admin.beverage.aged.title"
                values={{ order: index + 1 }}
              />
            </h4>
            <AgedType defaultValue={type} form={form} index={index} />
            <AgedWood defaultValue={wood} form={form} index={index} />
            <AgedTime defaultValue={time} form={form} index={index} />
            <PreviousContent
              defaultValue={previousContent}
              form={form}
              index={index}
            />
          </fieldset>
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append(emptyAged)}
              remove={() => remove(index)}
              withRemove
            />
          )}
        </Fragment>
      ))}
      {!fields.length && <Plug append={() => append(emptyAged)} />}
    </div>
  );
};

export default Aged;
