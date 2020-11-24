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
          <em className="source-item label">
            <FormattedMessage
              id={
                details.filtration.label
                  ? 'global.confirmation'
                  : 'global.denial'
              }
            />
          </em>
        )}
        {isBoolean(details.filtration.producer) && (
          <em className="source-item producer">
            <FormattedMessage
              id={
                details.filtration.producer
                  ? 'global.confirmation'
                  : 'global.denial'
              }
            />
          </em>
        )}
        {isBoolean(details.filtration.editorial) && (
          <em className="source-item editorial">
            <FormattedMessage
              id={
                details.filtration.editorial
                  ? 'global.confirmation'
                  : 'global.denial'
              }
            />
          </em>
        )}
      </dd>
    </>
  ) : null;

export default Filtration;
