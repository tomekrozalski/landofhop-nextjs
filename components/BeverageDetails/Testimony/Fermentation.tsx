import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { FormattedList } from 'elements';

const Fermentation: React.FC<{ details: Details }> = ({ details }) =>
  details.fermentation ? (
    <>
      <dt>
        <FormattedMessage id="global.fermentation" />
      </dt>
      <dd>
        {details.fermentation.label && (
          <FormattedList className="source-item label" mode="short">
            {details.fermentation.label.map(type => (
              <em key={type}>
                <FormattedMessage id={`beverage.fermentationType.${type}`} />
              </em>
            ))}
          </FormattedList>
        )}
        {details.fermentation.producer && (
          <FormattedList className="source-item producer" mode="short">
            {details.fermentation.producer.map(type => (
              <em key={type}>
                <FormattedMessage id={`beverage.fermentationType.${type}`} />
              </em>
            ))}
          </FormattedList>
        )}
        {details.fermentation.editorial && (
          <FormattedList className="source-item editorial" mode="short">
            {details.fermentation.editorial.map(type => (
              <em key={type}>
                <FormattedMessage id={`beverage.fermentationType.${type}`} />
              </em>
            ))}
          </FormattedList>
        )}
      </dd>
    </>
  ) : null;

export default Fermentation;
