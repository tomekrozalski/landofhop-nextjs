import { AgedType as AgedTypeEnum } from 'utils/enums/Beverage';
import { Condition, OptionGroup } from 'dashboard/elements';
import styles from './Aged.module.css';

type Props = {
  defaultValue: AgedTypeEnum | null;
  form: string;
  index: number;
};

const AgedType: React.FC<Props> = ({ defaultValue, form, index }) => (
  <div className={styles.type}>
    <Condition
      form={form}
      initialValue={defaultValue || AgedTypeEnum.barrel}
      name={`aged[${index}].type`}
    />
    <OptionGroup
      data={[
        {
          id: `aged-type-barrel-${index}`,
          label: 'admin.beverage.aged.type.barrel',
          option: AgedTypeEnum.barrel,
        },
        {
          id: `aged-type-wood-${index}`,
          label: 'admin.beverage.aged.type.wood',
          option: AgedTypeEnum.wood,
        },
      ]}
      defaultValue={defaultValue}
      name={`aged[${index}].type`}
    />
  </div>
);

export default AgedType;
