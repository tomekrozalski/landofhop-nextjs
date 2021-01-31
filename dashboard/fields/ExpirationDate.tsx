import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { ExpirationDateUnit } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import { ExpirationDateUnitSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const ExpirationDate: React.FC<Props> = ({ form }) => {
  const { formatMessage } = useIntl();

  const initialValue = {
    value: 0,
    unit: {
      label: formatMessage({
        id: `global.timeUnit.${ExpirationDateUnit.month}`,
      }),
      value: ExpirationDateUnit.month,
    },
  };

  return (
    <div className={clsx(styles.grid, styles.conditionalDouble)}>
      <Label form={form} name="expirationDate" />
      <Condition
        emptyValue={{
          value: null,
          unit: null,
        }}
        form={form}
        initialValue={initialValue}
        name="expirationDate"
      />
      <TextInput form={form} name="expirationDate.value" type="number" />
      <ExpirationDateUnitSelect
        defaultValue={initialValue.unit}
        form={form}
        name="expirationDate.unit"
      />
    </div>
  );
};

export default ExpirationDate;
