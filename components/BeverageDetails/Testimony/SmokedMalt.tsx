import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const SmokedMalt: React.FC<{ details: Details }> = ({ details }) =>
  details.smokedMalt ? (
    <>
      <dt>
        <FormattedMessage id="global.smokedMalt" />
      </dt>
      <dd>
        {details.smokedMalt.label && (
          <span className="source-item">
            <em className="label">
              <FormattedMessage id="global.confirmation" />
            </em>
          </span>
        )}
        {details.smokedMalt.producer && (
          <span className="source-item">
            <em className="producer">
              <FormattedMessage id="global.confirmation" />
            </em>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default SmokedMalt;
