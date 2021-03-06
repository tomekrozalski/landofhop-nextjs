import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import { useController } from 'react-hook-form';

import {
  AgedType as AgedTypeEnum,
  AgedWood as AgedWoodEnum,
} from 'utils/enums/Beverage';
import styles from './OptionGroup.module.css';

type Props = {
  data: {
    id: string;
    label: string;
    option: AgedTypeEnum | AgedWoodEnum;
  }[];
  defaultValue: AgedTypeEnum | AgedWoodEnum | null;
  name: string;
};

const OptionGroup: React.FC<Props> = ({ data, defaultValue, name }) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    defaultValue,
  });

  return (
    <ul
      className={clsx(styles.optionGroup, {
        [styles.disabled]: value === null,
      })}
    >
      {data.map(({ id, label, option }) => (
        <li key={id} className={styles.listOption}>
          <input
            checked={value === option}
            className={styles.input}
            disabled={value === null}
            id={id}
            onChange={() => onChange(option)}
            type="radio"
          />
          <label className={styles.label} htmlFor={id}>
            <FormattedMessage id={label} />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default OptionGroup;
