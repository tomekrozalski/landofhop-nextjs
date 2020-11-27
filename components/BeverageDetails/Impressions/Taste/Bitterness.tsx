import { FormattedMessage } from 'react-intl';
import isNumber from 'lodash/isNumber';

import { Details } from 'utils/types/Beverage';
import styles from '../Impressions.module.css';

const Bitterness: React.FC<{ details: Details }> = ({ details }) =>
  details.bitterness ? (
    <>
      <dt>
        <FormattedMessage id="beverage.bitterness" />
      </dt>
      <dd>
        {isNumber(details.bitterness.label) && (
          <progress max="100" value={details.bitterness.label}>
            {details.bitterness.label}%
          </progress>
        )}
        {isNumber(details.bitterness.producer) && (
          <progress
            className={styles.producer}
            max="100"
            value={details.bitterness.producer}
          >
            {details.bitterness.producer}%
          </progress>
        )}
      </dd>
    </>
  ) : null;

export default Bitterness;
