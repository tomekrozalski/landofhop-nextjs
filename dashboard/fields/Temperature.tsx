import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { TemperatureUnit } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import { TemperatureUnitSelect } from 'dashboard/elements/Select';
import { initialValues } from 'dashboard/BeverageData/Label/utils';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Temperature: React.FC<Props> = ({ form }) => {
  const { formatMessage } = useIntl();

  const initialValue = {
    from: 0,
    to: 0,
    unit: {
      label: formatMessage({
        id: `global.temperatureUnit.${TemperatureUnit.celcius}`,
      }),
      value: TemperatureUnit.celcius,
    },
  };

  return (
    <div className={clsx(styles.grid, styles.conditionalThree)}>
      <Label form={form} name="temperature" />
      <Condition
        form={form}
        emptyValue={{
          from: null,
          to: null,
          unit: null,
        }}
        initialValue={initialValue}
        name="temperature"
      />
      <TextInput form={form} name="temperature.from" type="number" />
      <TextInput form={form} name="temperature.to" type="number" />
      <TemperatureUnitSelect
        defaultValue={initialValue.unit}
        form={form}
        name="temperature.unit"
      />
    </div>
  );
};

export default Temperature;
