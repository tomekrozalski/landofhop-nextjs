import { useIntl } from 'react-intl';
import clsx from 'clsx';
import Markdown from 'markdown-to-jsx';

import { Details } from 'utils/types/Beverage';
import Article from './Article';
import styles from './Tale.module.css';

const Tale: React.FC<{ details: Details }> = ({ details }) => {
  const { locale } = useIntl();
  const { tale } = details;

  const getProducerTale = () => {
    const { article, language, lead } =
      tale.producer.find(item => item?.language === locale) || tale.producer[0];

    return (
      <div
        className={clsx(styles.taleItem, styles.producer)}
        lang={language !== locale ? language : null}
      >
        <Markdown>{lead}</Markdown>
        {article && <Article content={article} />}
      </div>
    );
  };

  return (
    <div className={styles.taleWrapper}>
      {tale && (
        <>
          {tale.label &&
            tale.label.map(({ article, language, lead }) => (
              <div
                key={lead}
                className={styles.taleItem}
                lang={language !== locale ? language : null}
              >
                <Markdown>{lead}</Markdown>
                {article && <Article content={article} />}
              </div>
            ))}
          {tale.producer && getProducerTale()}
        </>
      )}
    </div>
  );
};

export default Tale;
