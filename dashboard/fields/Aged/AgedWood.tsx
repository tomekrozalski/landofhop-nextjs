import { AgedWood as AgedWoodEnum } from 'utils/enums/Beverage';
import { Condition, OptionGroup } from 'dashboard/elements';
import styles from './Aged.module.css';

type Props = {
  defaultValue: AgedWoodEnum | null;
  form: string;
  index: number;
};

const AgedWood: React.FC<Props> = ({ defaultValue, form, index }) => (
  <div className={styles.wood}>
    <Condition
      form={form}
      initialValue={defaultValue || AgedWoodEnum.oak}
      name={`aged[${index}].wood`}
    />
    <OptionGroup
      data={[
        {
          id: `aged-wood-oak-${index}`,
          label: 'admin.beverage.aged.wood.oak',
          option: AgedWoodEnum.oak,
        },
        {
          id: `aged-wood-beech-${index}`,
          label: 'admin.beverage.aged.wood.beech',
          option: AgedWoodEnum.beech,
        },
      ]}
      name={`aged[${index}].wood`}
    />
  </div>
);

export default AgedWood;
