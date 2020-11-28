import { useIntl } from 'react-intl';
import clsx from 'clsx';
import Markdown from 'markdown-to-jsx';

import { Details } from 'utils/types/Beverage';
import Article from './Article';
import styles from './Tale.module.css';

const Tale: React.FC<{ details: Details }> = ({ details }) => {
  const { locale } = useIntl();
  const { tale } = details;

  return (
    <div className={styles.taleWrapper}>
      {tale && (
        <>
          {tale.label && (
            <div
              className={styles.taleItem}
              lang={tale.label.language !== locale ? tale.label.language : null}
            >
              <Markdown>{tale.label.lead}</Markdown>
              {tale.label.article && <Article content={tale.label.article} />}
            </div>
          )}
          {tale.producer && (
            <div
              className={clsx(styles.taleItem, styles.producer)}
              lang={
                tale.producer.language !== locale
                  ? tale.producer.language
                  : null
              }
            >
              <Markdown>{tale.producer.lead}</Markdown>
              {tale.producer.article && (
                <Article content={tale.producer.article} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tale;
