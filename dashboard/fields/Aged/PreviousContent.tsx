import { AgedType as AgedTypeEnum } from 'utils/enums/Beverage';
import { Condition } from 'dashboard/elements';
import { AgedPreviousContentSelect } from 'dashboard/elements/Select';
import styles from './Aged.module.css';

type Props = {
  defaultValue:
    | {
        label: string;
        value: string;
      }[]
    | null;
  form: string;
  index: number;
};

const PreviousContent: React.FC<Props> = ({ defaultValue, form, index }) => (
  <div className={styles.type}>
    <Condition
      form={form}
      initialValue={[]}
      name={`aged[${index}].previousContent`}
    />
    <AgedPreviousContentSelect
      defaultValue={defaultValue}
      form={form}
      name={`aged[${index}].previousContent`}
    />
  </div>
);

export default PreviousContent;
