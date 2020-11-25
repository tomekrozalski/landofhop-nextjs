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
              <span className="source-item">
                <Translated
                  className="label"
                  tag="span"
                  values={details.contract.label.name}
                />
              </span>
            )}
            {details.contract.producer && (
              <span className="source-item">
                <Translated
                  className="producer"
                  tag="span"
                  values={details.contract.producer.name}
                />
              </span>
            )}
            {details.contract.editorial && (
              <span className="source-item">
                <Translated
                  className="editorial"
                  tag="span"
                  values={details.contract.editorial.name}
                />
              </span>
            )}
          </>
        ),
      }}
    />
  ) : null;

export default Contact;
