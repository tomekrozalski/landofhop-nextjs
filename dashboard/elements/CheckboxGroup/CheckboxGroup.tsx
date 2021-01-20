import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import { useController } from 'react-hook-form';

import { Fermentation as FermentationEnum } from 'utils/enums/Beverage';
import styles from './CheckboxGroup.module.css';

type Props = {
  data: {
    id: string;
    label: string;
    option: FermentationEnum;
  }[];
  form: string;
  name: string;
};

const CheckboxGroup: React.FC<Props> = ({ data, form, name }) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    defaultValue: null,
  });

  const onOptionChange = (isChecked: boolean, type: FermentationEnum) =>
    onChange(
      isChecked
        ? [...value, type]
        : value.filter((item: FermentationEnum) => item !== type),
    );

  return (
    <ul
      className={clsx(styles.checkboxGroup, {
        [styles.disabled]: value === null,
      })}
    >
      {data.map(({ id, label, option }) => (
        <li key={id} className={styles.listOption}>
          <input
            checked={!!value?.includes(option)}
            className={styles.input}
            disabled={value === null}
            id={id}
            onChange={e => onOptionChange(e.target.checked, option)}
            type="checkbox"
          />
          <label className={styles.label} htmlFor={id}>
            <FormattedMessage id={label} />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxGroup;
