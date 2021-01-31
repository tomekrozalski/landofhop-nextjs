import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { HopRateUnit } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import { HopRateUnitSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const HopRate: React.FC<Props> = ({ form }) => {
  const { formatMessage } = useIntl();

  const initialValue = {
    value: 0,
    unit: {
      label: formatMessage({
        id: `admin.beverage.hopRate.unit.${HopRateUnit.gl}`,
      }),
      value: HopRateUnit.gl,
    },
  };

  return (
    <div className={clsx(styles.grid, styles.conditionalDouble)}>
      <Label form={form} name="hopRate" />
      <Condition
        emptyValue={{
          value: null,
          unit: null,
        }}
        form={form}
        initialValue={initialValue}
        name="hopRate"
      />
      <TextInput form={form} name="hopRate.value" type="number" />
      <HopRateUnitSelect
        defaultValue={initialValue.unit}
        form={form}
        name="hopRate.unit"
      />
    </div>
  );
};

export default HopRate;
