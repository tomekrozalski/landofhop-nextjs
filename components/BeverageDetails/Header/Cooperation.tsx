import { FormattedMessage } from 'react-intl';

import FormattedList from 'elements/FormattedList';
import MarkLang from 'elements/MarkLang';
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
                {details.cooperation.label.map(name => (
                  <MarkLang key={name.value} name={name} tag="span" />
                ))}
              </FormattedList>
            )}
            {details.cooperation.producer && (
              <FormattedList className="producer" mode="short">
                {details.cooperation.producer.map(name => (
                  <MarkLang key={name.value} name={name} tag="span" />
                ))}
              </FormattedList>
            )}
            {details.cooperation.editorial && (
              <FormattedList className="editorial" mode="short">
                {details.cooperation.editorial.map(name => (
                  <MarkLang key={name.value} name={name} tag="span" />
                ))}
              </FormattedList>
            )}
          </>
        ),
      }}
    />
  ) : null;

export default Cooperation;
