import { FormattedMessage, useIntl } from 'react-intl';

import { Details } from 'utils/types/Beverage';

const Ingredients: React.FC<{ details: Details }> = ({ details }) => {
  const label = details.ingredientsDescription?.label;
  const producer = details.ingredientsDescription?.producer;

  return label || producer ? (
    <>
      {label && (
        <>
          <dt>
            <FormattedMessage
              id={`beverage.${label.complete ? 'ingredients' : 'contains'}`}
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
              id={`beverage.${producer.complete ? 'ingredients' : 'contains'}`}
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
