import { useIntl } from 'react-intl';

import { ContainerColor } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const ContainerColorSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(ContainerColor).map(value => ({
        label: formatMessage({
          id: `admin.beverage.container.color.${value}`,
        }),
        value,
      }))}
      style={{ gridColumn: '4 / 5' }}
    />
  );
};

export default ContainerColorSelect;
