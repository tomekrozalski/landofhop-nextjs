import { FormattedMessage, useIntl } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { FormattedList } from 'elements';

const Style: React.FC<{ details: Details }> = ({ details }) => {
  const { locale } = useIntl();
  const { style } = details;

  return style ? (
    <>
      <dt>
        <FormattedMessage id="global.style" />
      </dt>
      <dd>
        {style.label && (
          <span className="source-item">
            <FormattedList className="label" mode="narrow">
              {style.label.map(({ language, value }) => (
                <em lang={language !== locale ? language : null} key={value}>
                  {value}
                </em>
              ))}
            </FormattedList>
          </span>
        )}
        {style.producer && (
          <span className="source-item">
            <FormattedList className="producer" mode="narrow">
              {style.producer.map(({ language, value }) => (
                <em lang={language !== locale ? language : null} key={value}>
                  {value}
                </em>
              ))}
            </FormattedList>
          </span>
        )}
        {style.editorial && (
          <span className="source-item">
            <FormattedList className="editorial" mode="narrow">
              {style.editorial.map(({ language, value }) => (
                <em lang={language !== locale ? language : null} key={value}>
                  {value}
                </em>
              ))}
            </FormattedList>
          </span>
        )}
      </dd>
    </>
  ) : null;
};

export default Style;
