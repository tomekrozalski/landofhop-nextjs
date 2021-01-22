import { useIntl } from 'react-intl';

import { ExtractUnit } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const ExtractUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const units = Object.keys(ExtractUnit);

  return (
    <Select
      {...props}
      options={units.map(value => ({
        label: formatMessage({ id: `admin.beverage.extract.unit.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default ExtractUnitSelect;
