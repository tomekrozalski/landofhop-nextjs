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
              <FormattedList className="label" mode="short">
                {details.cooperation.label.map(({ id, name }) => (
                  <Translated key={id} tag="span" values={name} />
                ))}
              </FormattedList>
            )}
            {details.cooperation.producer && (
              <FormattedList className="producer" mode="short">
                {details.cooperation.producer.map(({ id, name }) => (
                  <Translated key={id} tag="span" values={name} />
                ))}
              </FormattedList>
            )}
            {details.cooperation.editorial && (
              <FormattedList className="editorial" mode="short">
                {details.cooperation.editorial.map(({ id, name }) => (
                  <Translated key={id} tag="span" values={name} />
                ))}
              </FormattedList>
            )}
          </>
        ),
      }}
    />
  ) : null;

export default Cooperation;
