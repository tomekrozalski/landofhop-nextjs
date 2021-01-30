import { FormattedMessage, useIntl } from 'react-intl';

import TextInput from 'elements/TextInput';
import { AgedTimeUnitSelect } from 'dashboard/elements/Select';
import { AgedTimeUnit } from 'utils/enums/Beverage';
import { Condition } from 'dashboard/elements';
import styles from './Aged.module.css';

type Props = {
  defaultValue: {
    value: number | null;
    unit: {
      label: string;
      value: string;
    } | null;
  };
  form: string;
  index: number;
};

const AgedTime: React.FC<Props> = ({ defaultValue, form, index }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.time}>
      <label>
        <FormattedMessage id="admin.beverage.aged.timeOfAged" />
      </label>
      <div className={styles.timeContent}>
        <Condition
          emptyValue={{
            value: null,
            unit: null,
          }}
          form={form}
          initialValue={{
            value: 0,
            unit: {
              label: formatMessage({
                id: `global.timeUnit.${AgedTimeUnit.month}`,
              }),
              value: AgedTimeUnit.month,
            },
          }}
          name={`aged[${index}].time`}
        />
        <TextInput
          defaultValue={defaultValue.value}
          form={form}
          name={`aged[${index}].time.value`}
        />
        <AgedTimeUnitSelect
          defaultValue={defaultValue.unit}
          form={form}
          name={`aged[${index}].time.unit`}
        />
      </div>
    </div>
  );
};

export default AgedTime;
