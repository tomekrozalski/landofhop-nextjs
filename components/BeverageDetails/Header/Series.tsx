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
          <>
            {series.label && (
              <FormattedList className="source-item label" mode="short">
                {series.label.map(({ language, value }) => (
                  <span
                    lang={locale !== language ? language : null}
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </FormattedList>
            )}
            {series.producer && (
              <FormattedList className="source-item producer" mode="short">
                {series.producer.map(({ language, value }) => (
                  <span
                    lang={locale !== language ? language : null}
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </FormattedList>
            )}
          </>
        ),
      }}
    />
  ) : null;
};

export default Series;
