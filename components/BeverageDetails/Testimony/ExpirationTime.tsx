import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const ExpirationTime: React.FC<{ details: Details }> = ({ details }) =>
  details.expirationDate ? (
    <>
      <dt>
        <FormattedMessage id="global.expirationTime" />
      </dt>
      <dd>
        {details.expirationDate.label && (
          <span className="source-item">
            <span className="label">
              <FormattedMessage
                id={`global.time.${details.expirationDate.label.unit}`}
                values={{ value: details.expirationDate.label.value }}
              />
            </span>
          </span>
        )}
        {details.expirationDate.producer && (
          <span className="source-item">
            <span className="producer">
              <FormattedMessage
                id={`global.time.${details.expirationDate.producer.unit}`}
                values={{ value: details.expirationDate.producer.value }}
              />
            </span>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default ExpirationTime;
