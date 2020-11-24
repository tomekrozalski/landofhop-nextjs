import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Alcohol: React.FC<{ details: Details }> = ({ details }) =>
  details.alcohol ? (
    <>
      <dt>
        <FormattedMessage id="global.alcohol" />
      </dt>
      <dd>
        {details.alcohol.label && (
          <em className="source-item label">
            <FormattedMessage
              id="beverage.alcoholValue"
              values={details.alcohol.label}
            />
            {details.alcohol.label.scope && (
              <FormattedMessage
                id={`beverage.alcoholScopeValues.${details.alcohol.label.scope}`}
              />
            )}
          </em>
        )}
        {details.alcohol.producer && (
          <em className="source-item producer">
            <FormattedMessage
              id="beverage.alcoholValue"
              values={details.alcohol.producer}
            />
            {details.alcohol.producer.scope && (
              <FormattedMessage
                id={`beverage.alcoholScopeValues.${details.alcohol.producer.scope}`}
              />
            )}
          </em>
        )}
        {details.alcohol.editorial && (
          <em className="source-item noSeparator editorial">
            <FormattedMessage
              id={`beverage.alcoholScopeValues.${details.alcohol.editorial.scope}`}
            />
          </em>
        )}
      </dd>
    </>
  ) : null;

export default Alcohol;
