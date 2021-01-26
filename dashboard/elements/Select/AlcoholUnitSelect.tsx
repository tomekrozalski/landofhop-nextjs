import { useIntl } from 'react-intl';

import { AlcoholUnit } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const AlcoholUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(AlcoholUnit).map(value => ({
        label: formatMessage({ id: `admin.beverage.alcohol.unit.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default AlcoholUnitSelect;
