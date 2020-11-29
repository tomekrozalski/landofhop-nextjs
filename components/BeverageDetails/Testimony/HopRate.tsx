import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const HopRate: React.FC<{ details: Details }> = ({ details }) =>
  details.hopRate ? (
    <>
      <dt>
        <FormattedMessage id="beverage.hopRate" />
      </dt>
      <dd>
        {details.hopRate.label && (
          <span className="source-item">
            <em className="label">
              <FormattedMessage
                id="beverage.hopRate.value"
                values={details.hopRate.label}
              />
            </em>
          </span>
        )}
        {details.hopRate.producer && (
          <span className="source-item">
            <em className="producer">
              <FormattedMessage
                id="beverage.hopRate.value"
                values={details.hopRate.producer}
              />
            </em>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default HopRate;
