import { useIntl } from 'react-intl';

import { IngredientType } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const IngredientTypeSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      options={Object.keys(IngredientType).map(value => ({
        label: formatMessage({ id: `admin.ingredient.type.${value}` }),
        value,
        type: value as IngredientType,
      }))}
      placeholder="selectIngredientType"
    />
  );
};

export default IngredientTypeSelect;
