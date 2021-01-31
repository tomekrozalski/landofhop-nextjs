import { components } from 'react-select';
import clsx from 'clsx';

import styles from './Select.module.css';

type Props = {
  data: {
    type?: string;
  };
};

const Option: React.FC<Props> = props => (
  <div
    className={clsx(styles.markType, {
      [styles[props.data.type]]: !!props.data.type,
    })}
  >
    <components.Option {...props} />
  </div>
);

export default Option;
