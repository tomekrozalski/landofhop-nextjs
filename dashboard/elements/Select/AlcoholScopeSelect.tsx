import { useIntl } from 'react-intl';

import { AlcoholScope } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const AlcoholScopeSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(AlcoholScope).map(value => ({
        label: formatMessage({ id: `admin.beverage.alcohol.scope.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default AlcoholScopeSelect;
