import { FormattedMessage } from 'react-intl';
import isNumber from 'lodash/isNumber';

import { Details } from 'utils/types/Beverage';
import styles from '../Impressions.module.css';

const Hoppyness: React.FC<{ details: Details }> = ({ details }) =>
  details.hoppyness ? (
    <>
      <dt>
        <FormattedMessage id="beverage.hoppyness" />
      </dt>
      <dd>
        {isNumber(details.hoppyness.label) && (
          <progress max="100" value={details.hoppyness.label}>
            {details.hoppyness.label}%
          </progress>
        )}
        {isNumber(details.hoppyness.producer) && (
          <progress
            className={styles.producer}
            max="100"
            value={details.hoppyness.producer}
          >
            {details.hoppyness.producer}%
          </progress>
        )}
      </dd>
    </>
  ) : null;

export default Hoppyness;
