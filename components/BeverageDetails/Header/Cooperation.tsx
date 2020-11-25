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
              <span className="source-item">
                <FormattedList className="label" mode="short">
                  {details.cooperation.label.map(({ id, name }) => (
                    <Translated key={id} tag="span" values={name} />
                  ))}
                </FormattedList>
              </span>
            )}
            {details.cooperation.producer && (
              <span className="source-item">
                <FormattedList className="producer" mode="short">
                  {details.cooperation.producer.map(({ id, name }) => (
                    <Translated key={id} tag="span" values={name} />
                  ))}
                </FormattedList>
              </span>
            )}
            {details.cooperation.editorial && (
              <span className="source-item">
                <FormattedList className="editorial" mode="short">
                  {details.cooperation.editorial.map(({ id, name }) => (
                    <Translated key={id} tag="span" values={name} />
                  ))}
                </FormattedList>
              </span>
            )}
          </>
        ),
      }}
    />
  ) : null;

export default Cooperation;
