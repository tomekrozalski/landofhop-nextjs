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
          <span className="source-item label">
            <FormattedMessage
              id={`beverage.type.${details.beverageType.label}`}
            />
          </span>
        )}
        {details.beverageType.producer && (
          <span className="source-item producer">
            <FormattedMessage
              id={`beverage.type.${details.beverageType.producer}`}
            />
          </span>
        )}
      </dd>
    </>
  ) : null;

export default BeverageType;
