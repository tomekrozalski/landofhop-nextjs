import { CSSProperties } from 'react';
import ReactSelect from 'react-select';
import { useController } from 'react-hook-form';

import { IngredientType } from 'utils/enums/Beverage';
import FieldStatusIndicator from 'elements/FieldStatusIndicator';
import selectStyles from './selectStyles';
import styles from './Select.module.css';

type Props = {
  defaultValue: any;
  name: string;
  options: {
    label: string;
    value?: string;
    options?: { label: string; value: string }[];
    type?: IngredientType;
  }[];
  style?: CSSProperties;
};

const Select: React.FC<Props> = ({ defaultValue, name, options, style }) => {
  const {
    field: { ref, ...inputProps },
    meta: { invalid, isTouched },
  } = useController({
    name,
    defaultValue,
  });

  return (
    <span className={styles.select} style={style}>
      <FieldStatusIndicator invalid={invalid} touched={isTouched} type="select">
        <ReactSelect
          {...inputProps}
          inputRef={ref}
          options={options}
          styles={selectStyles}
        />
      </FieldStatusIndicator>
    </span>
  );
};

export default Select;
