import { FormattedMessage, useIntl } from 'react-intl';

import { FormattedList } from 'elements';
import { Details } from 'utils/types/Beverage';

const Series: React.FC<{ details: Details }> = ({ details }) => {
  const { locale } = useIntl();
  const { series } = details;

  return series ? (
    <FormattedMessage
      id="beverage.series"
      values={{
        series: (
          <span className="source-group">
            {series.label && (
              <FormattedList mode="short">
                {series.label.map(({ language, value }) => (
                  <span
                    className="label"
                    lang={locale !== language ? language : null}
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </FormattedList>
            )}
            {series.producer && (
              <FormattedList mode="short">
                {series.producer.map(({ language, value }) => (
                  <span
                    className="producer"
                    lang={locale !== language ? language : null}
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </FormattedList>
            )}
          </span>
        ),
      }}
    />
  ) : null;
};

export default Series;
