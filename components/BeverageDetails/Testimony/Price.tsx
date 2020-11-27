import { FormattedMessage, useIntl } from 'react-intl';

import { FormattedList } from 'elements';
import { Details } from 'utils/types/Beverage';
import { Price as PriceTypes } from 'utils/types/Beverage/fragments';

const PriceContent: React.FC<{
  type: 'label' | 'producer' | 'editorial';
  values: PriceTypes[];
}> = ({ type, values }) => {
  const { locale } = useIntl();

  return (
    <span className="source-item">
      <span className={type}>
        <FormattedList mode="narrow">
          {values.map(({ currency, date, value }) => (
            <em key={date.toString()}>
              {new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
              }).format(value)}
            </em>
          ))}
        </FormattedList>
      </span>
    </span>
  );
};

const Price: React.FC<{ details: Details }> = ({ details }) =>
  details.price ? (
    <>
      <dt>
        <FormattedMessage id="global.price" />
      </dt>
      <dd>
        {details.price.label && (
          <PriceContent type="label" values={details.price.label} />
        )}
        {details.price.producer && (
          <PriceContent type="producer" values={details.price.producer} />
        )}
        {details.price.editorial && (
          <PriceContent type="editorial" values={details.price.editorial} />
        )}
      </dd>
    </>
  ) : null;

export default Price;
