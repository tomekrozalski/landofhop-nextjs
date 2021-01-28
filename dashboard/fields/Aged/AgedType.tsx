import { AgedType as AgedTypeEnum } from 'utils/enums/Beverage';
import { Condition, OptionGroup } from 'dashboard/elements';
import styles from './Aged.module.css';

type Props = {
  defaultValue: string;
  form: string;
  name: string;
};

const AgedType: React.FC<Props> = ({ defaultValue, form, name }) => (
  <div className={styles.agedType}>
    <Condition
      form={form}
      initialValue={defaultValue || AgedTypeEnum.barrel}
      name={name}
    />
    <OptionGroup
      data={[
        {
          id: 'aged-type-barrel',
          label: 'admin.beverage.aged.type.barrel',
          option: AgedTypeEnum.barrel,
        },
        {
          id: 'aged-type-wood',
          label: 'admin.beverage.aged.type.wood',
          option: AgedTypeEnum.wood,
        },
      ]}
      form={form}
      name={name}
    />
  </div>
);

export default AgedType;
