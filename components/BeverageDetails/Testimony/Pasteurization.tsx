import { FormattedMessage } from 'react-intl';
import isBoolean from 'lodash/isBoolean';

import { Details } from 'utils/types/Beverage';

const Pasteurization: React.FC<{ details: Details }> = ({ details }) =>
  details.pasteurization ? (
    <>
      <dt>
        <FormattedMessage id="beverage.pasteurization" />
      </dt>
      <dd>
        {isBoolean(details.pasteurization.label) && (
          <span className="source-item">
            <em className="label">
              <FormattedMessage
                id={
                  details.pasteurization.label
                    ? 'global.confirmation'
                    : 'global.denial'
                }
              />
            </em>
          </span>
        )}
        {isBoolean(details.pasteurization.producer) && (
          <span className="source-item">
            <em className="producer">
              <FormattedMessage
                id={
                  details.pasteurization.producer
                    ? 'global.confirmation'
                    : 'global.denial'
                }
              />
            </em>
          </span>
        )}
        {isBoolean(details.pasteurization.editorial) && (
          <span className="source-item">
            <em className="editorial">
              <FormattedMessage
                id={
                  details.pasteurization.editorial
                    ? 'global.confirmation'
                    : 'global.denial'
                }
              />
            </em>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default Pasteurization;
