import { FormattedMessage, useIntl } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { IngredientsDescription } from 'utils/types/Beverage/fragments';

const IngredientsContent: React.FC<{
  type: string;
  values?: IngredientsDescription;
}> = ({ type, values }) => {
  if (!values) {
    return null;
  }

  return (
    <>
      <dt>
        <FormattedMessage
          id={`beverage.${values.complete ? 'ingredients' : 'contains'}`}
        />
      </dt>
      <dd>
        <span className="source-item">
          <em className={type}>{values.value}</em>
        </span>
      </dd>
    </>
  );
};

const Ingredients: React.FC<{ details: Details }> = ({ details }) => {
  const { locale } = useIntl();

  const label = details.ingredientsDescription?.label?.find(
    ({ language }) => language === locale,
  );

  const producer = details.ingredientsDescription?.producer?.find(
    ({ language }) => language === locale,
  );

  return label || producer ? (
    <>
      {label && (
        <>
          <dt>
            <FormattedMessage
              id={`global.${label.complete ? 'ingredients' : 'contains'}`}
            />
          </dt>
          <dd>
            <span className="source-item">
              <em className="label">{label.value}</em>
            </span>
            {producer && label.complete === producer.complete && (
              <span className="source-item">
                <em className="producer">{producer.value}</em>
              </span>
            )}
          </dd>
        </>
      )}
      {producer && label && label.complete !== producer.complete && ' / '}
      {producer && label?.complete !== producer.complete && (
        <>
          <dt>
            <FormattedMessage
              id={`global.${producer.complete ? 'ingredients' : 'contains'}`}
            />
          </dt>
          <dd>
            <span className="source-item">
              <em className="producer">{producer.value}</em>
            </span>
          </dd>
        </>
      )}
    </>
  ) : null;
};

export default Ingredients;
