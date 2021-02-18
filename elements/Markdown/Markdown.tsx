import clsx from 'clsx';
import MarkdownToJSX from 'markdown-to-jsx';

import styles from './Markdown.module.css';

type Props = {
  children: string;
  className?: string;
};

const Markdown: React.FC<Props> = ({ children, className }) => (
  <MarkdownToJSX
    className={clsx(styles.markdown, className)}
    options={{ forceBlock: true }}
  >
    {children}
  </MarkdownToJSX>
);

export default Markdown;
