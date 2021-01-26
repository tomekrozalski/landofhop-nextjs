import { useController } from 'react-hook-form';
import ReactSwitch from 'react-switch';

import styles from './Switch.module.css';

type Props = {
  name: string;
  form: string;
};

const Switch: React.FC<Props> = ({ name, form }) => {
  const { field } = useController({
    name,
    defaultValue: false,
  });

  return (
    <ReactSwitch
      checked={field.value === true}
      className={styles.switch}
      disabled={field.value === null}
      id={`${form}-${name}`.toLowerCase()}
      width={68}
      height={34}
      onChange={field.onChange}
      offColor="#cccccc"
      onColor="#90be6d"
    />
  );
};

export default Switch;
