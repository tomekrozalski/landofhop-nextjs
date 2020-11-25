import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { Translated } from 'elements';

const City: React.FC<{ details: Details }> = ({ details }) =>
  details.place ? (
    <>
      <dt>
        <FormattedMessage id="global.city" />
      </dt>
      <dd>
        {details.place.label && (
          <span className="source-item">
            <Translated
              className="label"
              tag="em"
              values={details.place.label.city}
            />
          </span>
        )}
        {details.place.producer && (
          <span className="source-item">
            <Translated
              className="producer"
              tag="em"
              values={details.place.producer.city}
            />
          </span>
        )}
        {details.place.editorial && (
          <span className="source-item">
            <Translated
              className="editorial"
              tag="em"
              values={details.place.editorial.city}
            />
          </span>
        )}
      </dd>
    </>
  ) : null;

export default City;
