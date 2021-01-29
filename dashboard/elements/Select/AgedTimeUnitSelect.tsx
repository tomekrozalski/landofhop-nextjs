import { useIntl } from 'react-intl';

import { AgedTimeUnit } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const AgedTimeUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(AgedTimeUnit).map(value => ({
        label: formatMessage({ id: `global.timeUnit.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default AgedTimeUnitSelect;
