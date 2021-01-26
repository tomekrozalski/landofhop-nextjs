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

  const empty = {
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
        name="extract"
        empty={empty}
        clearWith={{
          value: null,
          unit: null,
          relate: null,
        }}
      />
      <TextInput form={form} name="extract.value" type="number" />
      <ExtractUnitSelect
        defaultValue={empty.unit}
        form={form}
        name="extract.unit"
      />
      <ExtractRelateSelect
        defaultValue={empty.relate}
        form={form}
        name="extract.relate"
      />
    </div>
  );
};

export default Extract;
