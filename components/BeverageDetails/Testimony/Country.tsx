import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import MarkLang from 'elements/MarkLang';

const Country: React.FC<{ details: Details }> = ({ details }) =>
  details.place ? (
    <>
      <dt>
        <FormattedMessage id="global.country" />
      </dt>
      <dd>
        {details.place.label && (
          <span className="source-item">
            <MarkLang
              className="label"
              name={details.place.label.country}
              tag="em"
            />
          </span>
        )}
        {details.place.producer && (
          <span className="source-item">
            <MarkLang
              className="producer"
              name={details.place.producer.country}
              tag="em"
            />
          </span>
        )}
        {details.place.editorial && (
          <span className="source-item">
            <MarkLang
              className="editorial"
              name={details.place.editorial.country}
              tag="em"
            />
          </span>
        )}
      </dd>
    </>
  ) : null;

export default Country;
