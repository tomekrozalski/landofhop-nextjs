import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import { ContainerUnit } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value: string;
  };
  form: string;
  name: string;
};

const ContainerUnitSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const { setValue } = useFormContext();

  useEffect(() => {
    if (!props.defaultValue.label) {
      setValue('container.unit', {
        label: formatMessage({
          id: `admin.beverage.container.unit.${ContainerUnit.ml}`,
        }),
        value: ContainerUnit.ml,
      });
    }
  }, []);

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(ContainerUnit).map(value => ({
        label: formatMessage({ id: `admin.beverage.container.unit.${value}` }),
        value,
      }))}
      style={{ gridColumn: '3 / 4' }}
    />
  );
};

export default ContainerUnitSelect;
