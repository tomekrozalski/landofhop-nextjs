import { FormattedMessage } from 'react-intl';
import isBoolean from 'lodash/isBoolean';

import { Details } from 'utils/types/Beverage';

const Pasteurization: React.FC<{ details: Details }> = ({ details }) =>
  details.pasteurization ? (
    <>
      <dt>
        <FormattedMessage id="global.pasteurization" />
      </dt>
      <dd>
        {isBoolean(details.pasteurization.label) && (
          <em className="source-item label">
            <FormattedMessage
              id={
                details.pasteurization.label
                  ? 'global.confirmation'
                  : 'global.denial'
              }
            />
          </em>
        )}
        {isBoolean(details.pasteurization.producer) && (
          <em className="source-item producer">
            <FormattedMessage
              id={
                details.pasteurization.producer
                  ? 'global.confirmation'
                  : 'global.denial'
              }
            />
          </em>
        )}
        {isBoolean(details.pasteurization.editorial) && (
          <em className="source-item editorial">
            <FormattedMessage
              id={
                details.pasteurization.editorial
                  ? 'global.confirmation'
                  : 'global.denial'
              }
            />
          </em>
        )}
      </dd>
    </>
  ) : null;

export default Pasteurization;
