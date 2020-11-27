import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Color: React.FC<{ details: Details }> = ({ details }) =>
  details.color?.editorial ? (
    <>
      <dt>
        <FormattedMessage id="beverage.color" />
      </dt>
      <dd>
        <span className="color-sample">@ToDo: color</span>
      </dd>
    </>
  ) : null;

export default Color;
