import { useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import {
  ContainerMaterialBottle,
  ContainerMaterialCan,
  ContainerType,
} from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue: {
    label: string;
    value?: string;
  };
  form: string;
  name: string;
};

const ContainerMaterialSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const { setValue, watch } = useFormContext();
  const type = watch('container.type');

  const enums = useMemo(() => {
    if (type.value) {
      switch (type.value) {
        case ContainerType.can:
          return ContainerMaterialCan;
        case ContainerType.bottle:
        default:
          return ContainerMaterialBottle;
      }
    } else {
      return [];
    }
  }, [type.value]);

  useEffect(() => {
    if (type.value) {
      if (type.value === ContainerType.bottle) {
        setValue('container.material', {
          label: formatMessage({
            id: `admin.beverage.container.material.${ContainerMaterialBottle.glass}`,
          }),
          value: ContainerMaterialBottle.glass,
        });
      }

      if (type.value === ContainerType.can) {
        setValue('container.material', {
          label: formatMessage({
            id: `admin.beverage.container.material.${ContainerMaterialCan.aluminum}`,
          }),
          value: ContainerMaterialCan.aluminum,
        });
      }
    }
  }, [type.value]);

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(enums).map(value => ({
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
