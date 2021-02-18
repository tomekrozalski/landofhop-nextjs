import MarkdownToJSX from 'markdown-to-jsx';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

import styles from './Markdown.module.css';

type Props = {
  name: string;
  shift?: boolean;
};

const Markdown: React.FC<Props> = ({ name, shift }) => {
  const { watch } = useFormContext();
  const text = watch(name);

  return text ? (
    <MarkdownToJSX
      options={{ forceBlock: true }}
      className={clsx(styles.markdown, { [styles.shift]: shift })}
    >
      {text}
    </MarkdownToJSX>
  ) : null;
};

export default Markdown;
