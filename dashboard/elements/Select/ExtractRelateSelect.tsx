import { useIntl } from 'react-intl';

import { ExtractRelate } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const ExtractRelateSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const units = Object.keys(ExtractRelate);

  return (
    <Select
      {...props}
      options={units.map(value => ({
        label: formatMessage({ id: `admin.beverage.extract.relate.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default ExtractRelateSelect;
