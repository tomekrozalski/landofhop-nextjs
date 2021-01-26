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

  return (
    <Select
      {...props}
      options={Object.keys(ExtractUnit).map(value => ({
        label: formatMessage({ id: `admin.beverage.extract.unit.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default ExtractUnitSelect;
