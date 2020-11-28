import { FormattedMessage } from 'react-intl';

import { FormattedList, MarkLang } from 'elements';
import { Details } from 'utils/types/Beverage';

const Series: React.FC<{ details: Details }> = ({ details }) => {
  const { series } = details;

  return series ? (
    <FormattedMessage
      id="beverage.series"
      values={{
        series: (
          <>
            {series.label && (
              <span className="source-item">
                <FormattedList className="label" mode="short">
                  {series.label.map(name => (
                    <MarkLang key={name.value} name={name} />
                  ))}
                </FormattedList>
              </span>
            )}
            {series.producer && (
              <span className="source-item">
                <FormattedList className="producer" mode="short">
                  {series.producer.map(name => (
                    <MarkLang key={name.value} name={name} />
                  ))}
                </FormattedList>
              </span>
            )}
          </>
        ),
      }}
    />
  ) : null;
};

export default Series;
