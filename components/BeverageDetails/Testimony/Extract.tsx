import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Extract: React.FC<{ details: Details }> = ({ details }) =>
  details.extract ? (
    <>
      <dt>
        <FormattedMessage id="beverage.extract" />
      </dt>
      <dd>
        {details.extract.label && (
          <span className="source-item">
            <em className="label">
              <FormattedMessage
                id="beverage.extractValue"
                values={details.extract.label}
              />
            </em>
          </span>
        )}
        {details.extract.producer && (
          <span className="source-item">
            <em className="producer">
              <FormattedMessage
                id="beverage.extractValue"
                values={details.extract.producer}
              />
            </em>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default Extract;
