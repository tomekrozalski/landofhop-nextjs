import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Extract: React.FC<{ details: Details }> = ({ details }) =>
  details.extract ? (
    <>
      <dt>
        <FormattedMessage id="global.extract" />
      </dt>
      <dd>
        {details.extract.label && (
          <em className="source-item label">
            <FormattedMessage
              id="beverage.extractValue"
              values={details.extract.label}
            />
          </em>
        )}
        {details.extract.producer && (
          <em className="source-item producer">
            <FormattedMessage
              id="beverage.extractValue"
              values={details.extract.producer}
            />
          </em>
        )}
      </dd>
    </>
  ) : null;

export default Extract;
