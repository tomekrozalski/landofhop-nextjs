import clsx from 'clsx';
import { components } from 'react-select';
import { OptionProps } from 'react-select/src/types';

import Icon from 'elements/icons/Close';
import { IngredientType } from 'utils/enums/Beverage';
import styles from './Select.module.css';

const MultiValueRemove: React.FC<OptionProps> = props => (
  <components.MultiValueRemove {...props}>
    <div
      className={clsx(styles.multiValueRemove, {
        [styles.ingredient]: [
          IngredientType.hop,
          IngredientType.malt,
          IngredientType.appendix,
        ].includes(props.data.type),
      })}
    >
      <Icon />
    </div>
  </components.MultiValueRemove>
);

export default MultiValueRemove;
