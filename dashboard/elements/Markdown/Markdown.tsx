import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

import MarkdownElement from 'elements/Markdown';
import styles from './Markdown.module.css';

type Props = {
  name: string;
  shift?: boolean;
};

const Markdown: React.FC<Props> = ({ name, shift }) => {
  const { watch } = useFormContext();
  const text = watch(name);

  return text ? (
    <MarkdownElement
      className={clsx(styles.markdown, { [styles.shift]: shift })}
    >
      {text}
    </MarkdownElement>
  ) : null;
};

export default Markdown;
