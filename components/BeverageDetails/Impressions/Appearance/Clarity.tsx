import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Clarity: React.FC<{ details: Details }> = ({ details }) =>
  details.clarity?.editorial ? (
    <>
      <dt>
        <FormattedMessage id="beverage.clarity" />
      </dt>
      <dd>
        <FormattedMessage
          id={`beverage.clarity.${details.clarity.editorial}`}
        />
      </dd>
    </>
  ) : null;

export default Clarity;
