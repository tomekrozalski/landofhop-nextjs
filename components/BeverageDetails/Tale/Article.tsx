import React, { useRef, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { FormattedMessage } from 'react-intl';
import styles from './Article.module.css';

type Props = {
  content: string;
};

const Article = ({ content }: Props) => {
  const contentWrapperRef = useRef<HTMLDivElement>(null!);
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleContent = () => {
    const contentWrapper = contentWrapperRef.current;
    contentWrapper.style.height = isCollapsed
      ? '0'
      : `${contentWrapper.scrollHeight}px`;
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={styles.article} ref={contentWrapperRef}>
        <Markdown>{content}</Markdown>
      </div>
      <button className={styles.button} type="button" onClick={toggleContent}>
        <FormattedMessage
          id={`global.${isCollapsed ? 'readLess' : 'readMore'}`}
        />
      </button>
    </>
  );
};

export default Article;
