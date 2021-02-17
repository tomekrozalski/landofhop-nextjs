import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import { ContainerType } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Switch } from 'dashboard/elements';
import {
  ContainerColorSelect,
  ContainerMaterialSelect,
  ContainerTypeSelect,
  ContainerUnitSelect,
} from 'dashboard/elements/Select';
import { initialValues } from 'dashboard/BeverageData/Label/utils';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Container: React.FC<Props> = ({ form }) => {
  const { watch } = useFormContext();
  const type = watch('container.type');

  return (
    <>
      <div className={clsx(styles.grid, styles.three)}>
        <Label form={form} name="container" required />
        <ContainerTypeSelect
          defaultValue={initialValues.container.type}
          form={form}
          name="container.type"
        />
        <ContainerMaterialSelect
          defaultValue={initialValues.container.material}
          form={form}
          name="container.material"
        />
        <ContainerColorSelect
          defaultValue={initialValues.container.color}
          form={form}
          name="container.color"
        />
        <TextInput
          form={form}
          name="container.value"
          style={{ gridColumn: '2 / 3' }}
          type="number"
        />
        <ContainerUnitSelect
          defaultValue={initialValues.container.unit}
          form={form}
          name="container.unit"
        />
      </div>
      {type.value === ContainerType.bottle && (
        <>
          <div className={clsx(styles.grid, styles.basic)}>
            <Label name="hasCork" form={form} />
            <Switch form={form} name="container.hasCork" />
          </div>
          <div className={clsx(styles.grid, styles.basic)}>
            <Label name="hasCapWireFlip" form={form} />
            <Switch form={form} name="container.hasCapWireFlip" />
          </div>
        </>
      )}
    </>
  );
};

export default Container;
