import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Container: React.FC<{ details: Details }> = ({ details }) => (
  <>
    <dt>
      <FormattedMessage id="global.container" />
    </dt>
    <dd>
      <em className="label">
        <FormattedMessage
          id={`beverage.container.type.${details.container.type}`}
        />{' '}
        <FormattedMessage
          id={`beverage.container.material.${details.container.material}`}
        />
        {', '}
        <FormattedMessage
          id={`beverage.container.color.${details.container.color}`}
        />
        {', '}
        <FormattedMessage
          id="beverage.container.value"
          values={{
            value: details.container.value,
            unit: details.container.unit,
          }}
        />
      </em>
    </dd>
  </>
);

export default Container;
