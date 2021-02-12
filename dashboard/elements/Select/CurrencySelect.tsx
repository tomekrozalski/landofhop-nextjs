import { CSSProperties } from 'react';
import { useIntl } from 'react-intl';

import { Currency } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
  style: CSSProperties;
};

const CurrencySelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      options={Object.keys(Currency).map(value => ({
        label: formatMessage({ id: `global.currency.${value}` }),
        value,
      }))}
    />
  );
};

export default CurrencySelect;
