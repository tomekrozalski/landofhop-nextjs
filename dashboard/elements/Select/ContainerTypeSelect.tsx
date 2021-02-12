import { useIntl } from 'react-intl';

import { ContainerType } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value?: string;
  };
  form: string;
  name: string;
};

const ContainerTypeSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(ContainerType).map(value => ({
        label: formatMessage({ id: `admin.beverage.container.type.${value}` }),
        value,
      }))}
      style={{ gridColumn: '2 / 3' }}
    />
  );
};

export default ContainerTypeSelect;
