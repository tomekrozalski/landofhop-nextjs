import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { ExtractRelate, ExtractUnit } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import {
  ExtractRelateSelect,
  ExtractUnitSelect,
} from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Extract: React.FC<Props> = ({ form }) => {
  const { formatMessage } = useIntl();

  const initialValue = {
    relate: {
      label: formatMessage({
        id: `admin.beverage.extract.relate.${ExtractRelate.weight}`,
      }),
      value: ExtractRelate.weight,
    },
    unit: {
      label: formatMessage({
        id: `admin.beverage.extract.unit.${ExtractUnit.percent}`,
      }),
      value: ExtractUnit.percent,
    },
    value: 0,
  };

  return (
    <div className={clsx(styles.grid, styles.conditionalFour)}>
      <Label form={form} name="extract" />
      <Condition
        form={form}
        emptyValue={{
          value: null,
          unit: null,
          relate: null,
        }}
        initialValue={initialValue}
        name="extract"
      />
      <TextInput form={form} name="extract.value" type="number" />
      <ExtractUnitSelect
        defaultValue={initialValue.unit}
        form={form}
        name="extract.unit"
      />
      <ExtractRelateSelect
        defaultValue={initialValue.relate}
        form={form}
        name="extract.relate"
      />
    </div>
  );
};

export default Extract;
