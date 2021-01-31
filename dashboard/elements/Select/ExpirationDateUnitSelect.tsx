import { useIntl } from 'react-intl';

import { ExpirationDateUnit } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  } | null;
  form: string;
  name: string;
};

const ExpirationDateUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(ExpirationDateUnit).map(value => ({
        label: formatMessage({
          id: `global.timeUnit.${value}`,
        }),
        value,
      }))}
    />
  );
};

export default ExpirationDateUnitSelect;
