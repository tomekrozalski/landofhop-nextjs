import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const BeverageType: React.FC<{ details: Details }> = ({ details }) =>
  details.beverageType ? (
    <>
      <dt>
        <FormattedMessage id="global.category" />
      </dt>
      <dd>
        {details.beverageType.label && (
          <span className="source-item">
            <span className="label">
              <FormattedMessage
                id={`beverage.type.${details.beverageType.label}`}
              />
            </span>
          </span>
        )}
        {details.beverageType.producer && (
          <span className="source-item">
            <span className="producer">
              <FormattedMessage
                id={`beverage.type.${details.beverageType.producer}`}
              />
            </span>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default BeverageType;
