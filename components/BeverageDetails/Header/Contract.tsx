import { FormattedMessage } from 'react-intl';

import { Translated } from 'elements';
import { Details } from 'utils/types/Beverage';

const Contact: React.FC<{ details: Details }> = ({ details }) =>
  details.contract ? (
    <FormattedMessage
      id="beverage.contract"
      values={{
        brands: (
          <>
            {details.contract.label && (
              <Translated
                className="label"
                tag="span"
                values={details.contract.label.name}
              />
            )}
            {details.contract.producer && (
              <Translated
                className="producer"
                tag="span"
                values={details.contract.producer.name}
              />
            )}
            {details.contract.editorial && (
              <Translated
                className="editorial"
                tag="span"
                values={details.contract.editorial.name}
              />
            )}
          </>
        ),
      }}
    />
  ) : null;

export default Contact;
