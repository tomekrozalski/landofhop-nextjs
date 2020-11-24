import { FormattedMessage } from 'react-intl';

import { FormattedList, Translated } from 'elements';
import { Details } from 'utils/types/Beverage';

const Cooperation: React.FC<{ details: Details }> = ({ details }) =>
  details.cooperation ? (
    <FormattedMessage
      id="beverage.cooperation"
      values={{
        cooperation: (
          <>
            {details.cooperation.label && (
              <FormattedList className="source-item label" mode="short">
                {details.cooperation.label.map(({ name }) => (
                  <Translated tag="span" values={name} />
                ))}
              </FormattedList>
            )}
            {details.cooperation.producer && (
              <FormattedList className="source-item producer" mode="short">
                {details.cooperation.producer.map(({ name }) => (
                  <Translated tag="span" values={name} />
                ))}
              </FormattedList>
            )}
            {details.cooperation.editorial && (
              <FormattedList className="source-item editorial" mode="short">
                {details.cooperation.editorial.map(({ name }) => (
                  <Translated tag="span" values={name} />
                ))}
              </FormattedList>
            )}
          </>
        ),
      }}
    />
  ) : null;

export default Cooperation;
