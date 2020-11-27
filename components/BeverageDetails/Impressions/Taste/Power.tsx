import { FormattedMessage } from 'react-intl';
import isNumber from 'lodash/isNumber';

import { Details } from 'utils/types/Beverage';
import styles from '../Impressions.module.css';

const Power: React.FC<{ details: Details }> = ({ details }) =>
  details.power ? (
    <>
      <dt>
        <FormattedMessage id="beverage.power" />
      </dt>
      <dd>
        {isNumber(details.power.label) && (
          <progress max="100" value={details.power.label}>
            {details.power.label}%
          </progress>
        )}
        {isNumber(details.power.producer) && (
          <progress
            className={styles.producer}
            max="100"
            value={details.power.producer}
          >
            {details.power.producer}%
          </progress>
        )}
      </dd>
    </>
  ) : null;

export default Power;
