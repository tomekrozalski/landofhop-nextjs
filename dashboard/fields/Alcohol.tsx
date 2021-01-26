import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { AlcoholRelate, AlcoholUnit } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import {
  AlcoholRelateSelect,
  AlcoholScopeSelect,
  AlcoholUnitSelect,
} from 'dashboard/elements/Select';
import { initialValues } from 'dashboard/BeverageData/Label/utils';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Alcohol: React.FC<Props> = ({ form }) => {
  const { formatMessage } = useIntl();

  const initialValue = {
    relate: {
      label: formatMessage({
        id: `admin.beverage.alcohol.relate.${AlcoholRelate.capacity}`,
      }),
      value: AlcoholRelate.capacity,
    },
    scope: {
      label: '--',
      value: '-',
    },
    unit: {
      label: formatMessage({
        id: `admin.beverage.extract.unit.${AlcoholUnit.percent}`,
      }),
      value: AlcoholUnit.percent,
    },
    value: 0,
  };

  return (
    <div className={clsx(styles.grid, styles.conditionalFour)}>
      <Label form={form} name="alcohol" />
      <Condition
        form={form}
        emptyValue={initialValues.alcohol}
        initialValue={initialValue}
        name="alcohol"
      />
      <TextInput form={form} name="alcohol.value" type="number" />
      <AlcoholUnitSelect
        defaultValue={initialValue.unit}
        form={form}
        name="alcohol.unit"
      />
      <AlcoholRelateSelect
        defaultValue={initialValue.relate}
        form={form}
        name="alcohol.relate"
      />
      <AlcoholScopeSelect
        defaultValue={initialValue.scope}
        form={form}
        name="alcohol.scope"
      />
    </div>
  );
};

export default Alcohol;
