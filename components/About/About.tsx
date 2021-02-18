import { FormattedMessage, injectIntl } from 'react-intl';
import { IntlShape } from 'react-intl';

import Markdown from 'elements/Markdown';
import HeadTitle from 'elements/HeadTitle';
import styles from './About.module.css';

const About: React.FC<{ intl: IntlShape }> = ({ intl }) => (
  <article className={styles.about}>
    <HeadTitle title="about" />
    <h1>
      <FormattedMessage id="global.about" />
    </h1>
    <Markdown>{intl.formatMessage({ id: 'global.about.body' })}</Markdown>
  </article>
);

export default injectIntl(About);
