import { useIntl } from 'react-intl';

import { Clarity } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: any;
  form: string;
  name: string;
};

const ClaritySelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      options={Object.keys(Clarity).map(value => ({
        label: formatMessage({ id: `beverage.clarity.${value}` }),
        value,
      }))}
    />
  );
};

export default ClaritySelect;
