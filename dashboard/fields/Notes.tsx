import clsx from 'clsx';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { Condition, Markdown } from 'dashboard/elements';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Notes: React.FC<Props> = ({ form }) => (
  <div className={clsx(styles.grid, styles.optional)}>
    <Label form={form} name="notes" />
    <Condition form={form} initialValue="" name="notes" />
    <TextInput form={form} name="notes" textarea />
    <Markdown name="notes" shift />
  </div>
);

export default Notes;
