import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { FormattedList, MarkLang } from 'elements';

const DryHopped: React.FC<{ details: Details }> = ({ details }) =>
  details.isDryHopped ? (
    <>
      <dt>
        <FormattedMessage id="beverage.dryHopped" />
      </dt>
      <dd>
        {details.isDryHopped?.label && (
          <span className="source-item">
            <span className="label">
              {details.dryHopped?.label ? (
                <FormattedList mode="short">
                  {details.dryHopped.label.map(name => (
                    <MarkLang key={name.value} name={name} tag="em" />
                  ))}
                </FormattedList>
              ) : (
                <em>
                  <FormattedMessage id="global.confirmation" />
                </em>
              )}
            </span>
          </span>
        )}
        {details.isDryHopped?.producer && (
          <span className="source-item">
            <span className="producer">
              {details.dryHopped?.producer ? (
                <FormattedList mode="short">
                  {details.dryHopped.producer.map(name => (
                    <MarkLang key={name.value} name={name} tag="em" />
                  ))}
                </FormattedList>
              ) : (
                <em>
                  <FormattedMessage id="global.confirmation" />
                </em>
              )}
            </span>
          </span>
        )}
      </dd>
    </>
  ) : null;

export default DryHopped;
