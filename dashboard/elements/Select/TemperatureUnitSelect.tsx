import { useIntl } from 'react-intl';

import { TemperatureUnit } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const TemperatureUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(TemperatureUnit).map(value => ({
        label: formatMessage({ id: `global.temperatureUnit.${value}` }),
        value,
      }))}
    />
  );
};

export default TemperatureUnitSelect;
