import ReactSelect from 'react-select';
import { useIntl } from 'react-intl';

// import { getAnchor } from 'utils/helpers';
// import { FormName } from 'utils/enums';
// import { IngredientType } from 'components/BeverageDetails/utils/enums';
// import { FieldName } from 'dashboard/utils/enums';
// import { MultiValueRemove, Option, styles } from '.';
import styles from './Select.module.css';

type Props = {
  area?: string;
  disabled?: boolean;
  // form?: FormName;
  isMulti?: boolean;
  // name: FieldName | string;
  options: {
    label: string;
    value?: string;
    options?: { label: string; value: string }[];
    // type?: IngredientType;
  }[];
  placeholder?: string;
};

const Select: React.FC<Props> = ({
  disabled,
  // form,
  isMulti = false,
  // name,
  options,
  placeholder,
  style,
}) => {
  const { formatMessage } = useIntl();
  // const [field, , { setValue }] = useField(name);

  // const value =
  //   field.value?.label === '' || field.value?.value === '' ? null : field.value;

  const value = '';

  return (
    <span className={styles.select} style={style}>
      <ReactSelect
        // components={{ MultiValueRemove, Option }}
        // inputId={form ? getAnchor({ form, name }) : ''}
        // isDisabled={disabled || field.value === null}
        // isMulti={isMulti}
        isClearable={false}
        noOptionsMessage={() =>
          formatMessage({ id: 'dashboard.select.noOptions' })
        }
        // onChange={setValue}
        options={options}
        placeholder={
          placeholder
            ? formatMessage({
                id: `dashboard.select.placeholder.${placeholder}`,
              })
            : formatMessage({ id: 'dashboard.select.placeholder.default' })
        }
        styles={styles}
        value={value}
      />
    </span>
  );
};

export default Select;
