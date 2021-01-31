import { useIntl } from 'react-intl';

import { HopRateUnit } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const HopRateUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(HopRateUnit).map(value => ({
        label: formatMessage({ id: `admin.beverage.hopRate.unit.${value}` }),
        value,
      }))}
    />
  );
};

export default HopRateUnitSelect;
