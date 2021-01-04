import { CSSProperties } from 'react';
import ReactSelect from 'react-select';
import { useIntl } from 'react-intl';
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
  placeholder?: string;
  style?: CSSProperties;
};

const Select: React.FC<Props> = ({
  defaultValue,
  name,
  options,
  placeholder,
  style,
}) => {
  const { formatMessage } = useIntl();

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
          noOptionsMessage={() =>
            formatMessage({ id: 'admin.select.noOptions' })
          }
          options={options}
          placeholder={
            placeholder
              ? formatMessage({
                  id: `admin.select.placeholder.${placeholder}`,
                })
              : formatMessage({ id: 'admin.select.placeholder.default' })
          }
          styles={selectStyles}
        />
      </FieldStatusIndicator>
    </span>
  );
};

export default Select;
