import clsx from 'clsx';

import { Fermentation as FermentationEnum } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import { CheckboxGroup, Condition } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Fermentation: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="fermentation" />
    <Condition
      form={form}
      initialValue={[FermentationEnum.top]}
      name="fermentation"
    />
    <CheckboxGroup
      data={[
        {
          id: 'fermentation-top',
          label: 'beverage.fermentationType.top',
          option: FermentationEnum.top,
        },
        {
          id: 'fermentation-bottom',
          label: 'beverage.fermentationType.bottom',
          option: FermentationEnum.bottom,
        },
        {
          id: 'fermentation-spontaneous',
          label: 'beverage.fermentationType.spontaneous',
          option: FermentationEnum.spontaneous,
        },
      ]}
      form={form}
      name="fermentation"
    />
  </div>
);

export default Fermentation;
