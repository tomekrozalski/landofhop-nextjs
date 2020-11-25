import { FormattedMessage } from 'react-intl';
import isBoolean from 'lodash/isBoolean';

import { Details } from 'utils/types/Beverage';

const Filtration: React.FC<{ details: Details }> = ({ details }) =>
  details.filtration ? (
    <>
      <dt>
        <FormattedMessage id="global.filtration" />
      </dt>
      <dd>
        {isBoolean(details.filtration.label) && (
          <span className="source-item">
            <em className="label">
              <FormattedMessage
                id={
                  details.filtration.label
                    ? 'global.confirmation'
                    : 'global.denial'
                }
              />
            </em>
          </span>
        )}
        {isBoolean(details.filtration.producer) && (
          <span className="source-item">
            <em className="producer">
              <FormattedMessage
                id={
                  details.filtration.producer
                    ? 'global.confirmation'
                    : 'global.denial'
                }
              />
            </em>
          </span>
        )}
        {isBoolean(details.filtration.editorial) && (
          <span className="source-item">
            <em className="editorial">
              <FormattedMessage
                id={
                  details.filtration.editorial
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

export default Filtration;
