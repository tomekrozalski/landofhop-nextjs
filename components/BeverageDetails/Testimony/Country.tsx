import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { Translated } from 'elements';

const Country: React.FC<{ details: Details }> = ({ details }) =>
  details.place ? (
    <>
      <dt>
        <FormattedMessage id="global.country" />
      </dt>
      <dd>
        {details.place.label && (
          <Translated
            className="source-item label"
            tag="em"
            values={details.place.label.country}
          />
        )}
        {details.place.producer && (
          <Translated
            className="source-item producer"
            tag="em"
            values={details.place.producer.country}
          />
        )}
        {details.place.editorial && (
          <Translated
            className="source-item editorial"
            tag="em"
            values={details.place.editorial.country}
          />
        )}
      </dd>
    </>
  ) : null;

export default Country;
