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

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(ExtractRelate).map(value => ({
        label: formatMessage({ id: `admin.beverage.extract.relate.${value}` }),
        value,
      }))}
      placeholder="short"
    />
  );
};

export default ExtractRelateSelect;
