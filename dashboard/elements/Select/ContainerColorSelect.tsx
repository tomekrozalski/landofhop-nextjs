import { useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import {
  ContainerColorBottle,
  ContainerColorCan,
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

const ContainerColorSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();
  const { setValue, watch } = useFormContext();
  const [loaded, setLoaded] = useState(false);
  const type = watch('container.type');

  const enums = useMemo(() => {
    if (type.value) {
      switch (type.value) {
        case ContainerType.can:
          return ContainerColorCan;
        case ContainerType.bottle:
        default:
          return ContainerColorBottle;
      }
    } else {
      return [];
    }
  }, [type.value]);

  useEffect(() => {
    if (loaded) {
      if (type.value === ContainerType.bottle) {
        setValue('container.color', {
          label: formatMessage({
            id: `admin.beverage.container.color.${ContainerColorBottle.brown}`,
          }),
          value: ContainerColorBottle.brown,
        });
      }

      if (type.value === ContainerType.can) {
        setValue('container.color', {
          label: formatMessage({
            id: `admin.beverage.container.color.${ContainerColorCan.silver}`,
          }),
          value: ContainerColorCan.silver,
        });
      }
    }

    setLoaded(true);
  }, [type.value]);

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      options={Object.keys(enums).map(value => ({
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
