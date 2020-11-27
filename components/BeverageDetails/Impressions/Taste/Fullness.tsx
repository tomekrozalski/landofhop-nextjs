import { FormattedMessage } from 'react-intl';
import isNumber from 'lodash/isNumber';

import { Details } from 'utils/types/Beverage';
import styles from '../Impressions.module.css';

const Fullness: React.FC<{ details: Details }> = ({ details }) =>
  details.fullness ? (
    <>
      <dt>
        <FormattedMessage id="beverage.fullness" />
      </dt>
      <dd>
        {isNumber(details.fullness.label) && (
          <progress max="100" value={details.fullness.label}>
            {details.fullness.label}%
          </progress>
        )}
        {isNumber(details.fullness.producer) && (
          <progress
            className={styles.producer}
            max="100"
            value={details.fullness.producer}
          >
            {details.fullness.producer}%
          </progress>
        )}
      </dd>
    </>
  ) : null;

export default Fullness;
