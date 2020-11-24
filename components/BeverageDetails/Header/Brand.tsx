import { FormattedMessage } from 'react-intl';

import { Translated } from 'elements';
import { Details } from 'utils/types/Beverage';

const Brand: React.FC<{ details: Details }> = ({ details }) => {
  const { brand, contract, isContract } = details;

  return (
    <FormattedMessage
      id="beverage.brand"
      values={{
        prefix: contract || isContract ? 'contract' : '',
        brand: <Translated className="label" tag="em" values={brand.name} />,
      }}
    />
  );
};

export default Brand;
