import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';

import styles from './Plug.module.css';

type Props = {
  append: () => void;
  wide?: boolean;
};

const Plug: React.FC<Props> = ({ append, wide = false }) => (
  <button
    className={clsx(styles.plug, { [styles.wide]: wide })}
    type="button"
    onClick={append}
  >
    <FormattedMessage id="admin.append" />
  </button>
);

export default Plug;
