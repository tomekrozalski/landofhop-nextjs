import MarkdownToJSX from 'markdown-to-jsx';
import { useFormContext } from 'react-hook-form';

import styles from './Markdown.module.css';

type Props = {
  name: string;
};

const Markdown: React.FC<Props> = ({ name }) => {
  const { watch } = useFormContext();
  const text = watch(name);

  return text ? (
    <MarkdownToJSX className={styles.markdown}>{text}</MarkdownToJSX>
  ) : null;
};

export default Markdown;
