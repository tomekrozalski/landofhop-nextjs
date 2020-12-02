import { FormattedMessage } from 'react-intl';

import MarkLang from 'elements/MarkLang';
import { Details } from 'utils/types/Beverage';

const Brand: React.FC<{ details: Details }> = ({ details }) => {
  const { brand, contract, isContract } = details;

  return (
    <FormattedMessage
      id="beverage.brand"
      values={{
        prefix: contract || isContract ? 'contract' : '',
        brand: <MarkLang className="label" name={brand.name} tag="em" />,
      }}
    />
  );
};

export default Brand;
