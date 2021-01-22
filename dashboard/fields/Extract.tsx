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

  const initialValues = {
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
        fields={[
          {
            empty: initialValues.value,
            name: 'extractValue',
          },
          {
            empty: initialValues.unit,
            name: 'extractUnit',
          },
          {
            empty: initialValues.relate,
            name: 'extractRelate',
          },
        ]}
        form={form}
        label="extract"
      />
      <TextInput
        form={form}
        label="extract"
        name="extractValue"
        type="number"
      />
      <ExtractUnitSelect
        defaultValue={initialValues.unit}
        form={form}
        name="extractUnit"
      />
      <ExtractRelateSelect
        defaultValue={initialValues.relate}
        form={form}
        name="extractRelate"
      />
    </div>
  );
};

export default Extract;
