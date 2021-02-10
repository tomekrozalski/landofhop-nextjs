import clsx from 'clsx';
import { useIntl } from 'react-intl';

import { ExtractRelate, ExtractUnit } from 'utils/enums/Beverage';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
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
  const { formatMessage } = useIntl();

  return (
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
      {/* {type.value.value === ContainerType.bottle && (
        <>
          <Label name="hasCork" form={formName} />
          <StyledSwitch name={`${fieldName}.hasCork`} form={formName} />
          <Label name="hasCapWireFlip" form={formName} />
          <StyledSwitch name={`${fieldName}.hasCapWireFlip`} form={formName} />
        </>
      )} */}
    </div>
  );
};

export default Container;
