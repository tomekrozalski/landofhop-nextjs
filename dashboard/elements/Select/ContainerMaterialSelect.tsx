import { useIntl } from 'react-intl';

import { ContainerMaterial } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const ContainerMaterialSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(ContainerMaterial).map(value => ({
        label: formatMessage({
          id: `admin.beverage.container.material.${value}`,
        }),
        value,
      }))}
      style={{ gridColumn: '3 / 4' }}
    />
  );
};

export default ContainerMaterialSelect;
