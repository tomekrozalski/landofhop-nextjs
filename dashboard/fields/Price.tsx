import { Fragment } from 'react';
import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { useFieldArray } from 'react-hook-form';
import { format } from 'date-fns';

import { Currency } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { ActionButtons, Plug } from 'dashboard/elements';
import { CurrencySelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Price: React.FC<Props> = ({ form }) => {
  const { formatMessage } = useIntl();
  const { fields, append, remove } = useFieldArray({
    name: 'price',
  });

  const emptyPrice = {
    currency: {
      label: formatMessage({ id: `global.currency.${Currency.PLN}` }),
      value: Currency.PLN,
    },
    date: format(new Date(), 'dd.MM.yyyy'),
    value: 0,
  };

  return (
    <div className={clsx(styles.grid, styles.three)}>
      <Label form={form} htmlFor="price[0].value" name="price" />
      {fields.map(({ currency, date, id, value }, index) => (
        <Fragment key={id}>
          <TextInput
            defaultValue={value}
            form={form}
            name={`price[${index}].value`}
            style={{ gridColumn: '2/3' }}
          />
          <CurrencySelect
            defaultValue={currency}
            form={form}
            name={`price[${index}].currency`}
            style={{ gridColumn: '3/4' }}
          />
          <TextInput
            defaultValue={date}
            form={form}
            name={`price[${index}].date`}
            style={{ gridColumn: '4/5' }}
          />
          {fields.length === index + 1 && (
            <ActionButtons
              append={() => append(emptyPrice)}
              remove={() => remove(index)}
              withRemove
            />
          )}
        </Fragment>
      ))}
      {!fields.length && <Plug append={() => append(emptyPrice)} wider />}
    </div>
  );
};

export default Price;
