import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { MarkLang, FormattedList } from 'elements';

const Style: React.FC<{ details: Details }> = ({ details }) =>
  details.style ? (
    <>
      <dt>
        <FormattedMessage id="beverage.style" />
      </dt>
      <dd>
        {details.style.label && (
          <span className="source-item">
            <FormattedList className="label" mode="narrow">
              {details.style.label.map(name => (
                <MarkLang key={name.value} name={name} tag="em" />
              ))}
            </FormattedList>
          </span>
        )}
        {details.style.producer && (
          <span className="source-item">
            <FormattedList className="producer" mode="narrow">
              {details.style.producer.map(name => (
                <MarkLang key={name.value} name={name} tag="em" />
              ))}
            </FormattedList>
          </span>
        )}
        {details.style.editorial && (
          <span className="source-item">
            <FormattedList className="editorial" mode="narrow">
              {details.style.editorial.map(name => (
                <MarkLang key={name.value} name={name} tag="em" />
              ))}
            </FormattedList>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default Style;
