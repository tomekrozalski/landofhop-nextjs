import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Alcohol: React.FC<{ details: Details }> = ({ details }) =>
  details.alcohol ? (
    <>
      <dt>
        <FormattedMessage id="beverage.alcohol" />
      </dt>
      <dd>
        {details.alcohol.label && (
          <span className="source-item">
            <em className="label">
              <FormattedMessage
                id="beverage.alcoholValue"
                values={details.alcohol.label}
              />
              {details.alcohol.label.scope && (
                <>
                  {' '}
                  <FormattedMessage
                    id={`beverage.alcoholScopeValues.${details.alcohol.label.scope}`}
                  />
                </>
              )}
            </em>
          </span>
        )}
        {details.alcohol.producer && (
          <span className="source-item">
            <em className="producer">
              <FormattedMessage
                id="beverage.alcoholValue"
                values={details.alcohol.producer}
              />
              {details.alcohol.producer.scope && (
                <>
                  {' '}
                  <FormattedMessage
                    id={`beverage.alcoholScopeValues.${details.alcohol.producer.scope}`}
                  />
                </>
              )}
            </em>
          </span>
        )}
        {details.alcohol.editorial && (
          <span className="source-item noSeparator">
            <em className="editorial">
              <FormattedMessage
                id={`beverage.alcoholScopeValues.${details.alcohol.editorial.scope}`}
              />
            </em>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default Alcohol;
