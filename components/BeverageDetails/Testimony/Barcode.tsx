import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Barcode: React.FC<{ details: Details }> = ({ details }) =>
  details.barcode ? (
    <>
      <dt>
        <FormattedMessage id="global.barcode" />
      </dt>
      <dd>
        <em className="label">{details.barcode}</em>
      </dd>
    </>
  ) : null;

export default Barcode;
