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
                className="source-item label"
                tag="span"
                values={details.contract.label.name}
              />
            )}
            {details.contract.producer && (
              <Translated
                className="source-item producer"
                tag="span"
                values={details.contract.producer.name}
              />
            )}
            {details.contract.editorial && (
              <Translated
                className="source-item editorial"
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
