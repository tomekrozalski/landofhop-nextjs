import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { ExtractRelate, ExtractUnit } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Extract: React.FC<Props> = ({ form }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={clsx(styles.grid, styles.conditionalFour)}>
      <Label form={form} name="extract" />
      <Condition
        form={form}
        name="extract"
        empty={{
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
        }}
      />
      <TextInput form={form} name="extract" subname="value" type="number" />
    </div>
  );
};

export default Extract;
