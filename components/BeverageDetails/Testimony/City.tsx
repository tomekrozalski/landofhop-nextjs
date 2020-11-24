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
          <Translated
            className="source-item label"
            tag="em"
            values={details.place.label.city}
          />
        )}
        {details.place.producer && (
          <Translated
            className="source-item producer"
            tag="em"
            values={details.place.producer.city}
          />
        )}
        {details.place.editorial && (
          <Translated
            className="source-item editorial"
            tag="em"
            values={details.place.editorial.city}
          />
        )}
      </dd>
    </>
  ) : null;

export default City;
