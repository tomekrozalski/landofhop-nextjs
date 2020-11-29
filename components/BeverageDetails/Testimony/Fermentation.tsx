import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { FormattedList } from 'elements';

const Fermentation: React.FC<{ details: Details }> = ({ details }) =>
  details.fermentation ? (
    <>
      <dt>
        <FormattedMessage id="beverage.fermentation" />
      </dt>
      <dd>
        {details.fermentation.label && (
          <span className="source-item">
            <FormattedList className="label" mode="short">
              {details.fermentation.label.map(type => (
                <em key={type}>
                  <FormattedMessage id={`beverage.fermentationType.${type}`} />
                </em>
              ))}
            </FormattedList>
          </span>
        )}
        {details.fermentation.producer && (
          <span className="source-item">
            <FormattedList className="producer" mode="short">
              {details.fermentation.producer.map(type => (
                <em key={type}>
                  <FormattedMessage id={`beverage.fermentationType.${type}`} />
                </em>
              ))}
            </FormattedList>
          </span>
        )}
        {details.fermentation.editorial && (
          <span className="source-item">
            <FormattedList className="editorial" mode="short">
              {details.fermentation.editorial.map(type => (
                <em key={type}>
                  <FormattedMessage id={`beverage.fermentationType.${type}`} />
                </em>
              ))}
            </FormattedList>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default Fermentation;
