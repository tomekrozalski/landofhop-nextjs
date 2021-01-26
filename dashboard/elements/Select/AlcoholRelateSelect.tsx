import { useIntl } from 'react-intl';

import { AlcoholRelate } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const AlcoholRelateSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(AlcoholRelate).map(value => ({
        label: formatMessage({ id: `admin.beverage.alcohol.relate.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default AlcoholRelateSelect;
