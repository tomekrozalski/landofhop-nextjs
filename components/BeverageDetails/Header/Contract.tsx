import { FormattedMessage } from 'react-intl';

import { MarkLang } from 'elements';
import { Details } from 'utils/types/Beverage';

const Contact: React.FC<{ details: Details }> = ({ details }) =>
  details.contract ? (
    <FormattedMessage
      id="beverage.contract"
      values={{
        brands: (
          <>
            {details.contract.label && (
              <MarkLang
                className="label"
                name={details.contract.label}
                tag="span"
              />
            )}
            {details.contract.producer && (
              <MarkLang
                className="producer"
                name={details.contract.producer}
                tag="span"
              />
            )}
            {details.contract.editorial && (
              <MarkLang
                className="editorial"
                name={details.contract.editorial}
                tag="span"
              />
            )}
          </>
        ),
      }}
    />
  ) : null;

export default Contact;
