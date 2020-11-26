import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Temperature: React.FC<{ details: Details }> = ({ details }) => {
  const { temperature } = details;

  return temperature ? (
    <>
      <dt>
        <FormattedMessage id="beverage.temperature" />
      </dt>
      <dd>
        {temperature.label && (
          <span className="source-item">
            <span className="label">
              {temperature.label.from === temperature.label.to
                ? temperature.label.from
                : `${temperature.label.from}-${temperature.label.to}`}
              <FormattedMessage
                id="beverage.temperatureUnit"
                values={{ unit: temperature.label.unit }}
              />
            </span>
          </span>
        )}
        {temperature.producer && (
          <span className="source-item">
            <span className="producer">
              {temperature.producer.from === temperature.producer.to
                ? temperature.producer.from
                : `${temperature.producer.from}-${temperature.producer.to}`}
              <FormattedMessage
                id="beverage.temperatureUnit"
                values={{ unit: temperature.producer.unit }}
              />
            </span>
          </span>
        )}
      </dd>
    </>
  ) : null;
};

export default Temperature;
