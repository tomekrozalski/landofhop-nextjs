import { FormattedMessage } from 'react-intl';
import isNumber from 'lodash/isNumber';

import { Details } from 'utils/types/Beverage';
import styles from '../Impressions.module.css';

const Sweetness: React.FC<{ details: Details }> = ({ details }) =>
  details.sweetness ? (
    <>
      <dt>
        <FormattedMessage id="beverage.sweetness" />
      </dt>
      <dd>
        {isNumber(details.sweetness.label) && (
          <progress max="100" value={details.sweetness.label}>
            {details.sweetness.label}%
          </progress>
        )}
        {isNumber(details.sweetness.producer) && (
          <progress
            className={styles.producer}
            max="100"
            value={details.sweetness.producer}
          >
            {details.sweetness.producer}%
          </progress>
        )}
      </dd>
    </>
  ) : null;

export default Sweetness;
