import { FormattedMessage } from 'react-intl';

import FormattedList from 'elements/FormattedList';
import { Aged as AgedTypes } from 'utils/types/Beverage/fragments';

const AgedItem: React.FC<AgedTypes> = ({
  previousContent,
  type,
  time,
  wood,
}) => (
  <>
    {time && (
      <FormattedMessage
        id={`beverage.time.${time.unit}`}
        values={{ value: time.value }}
      />
    )}
    {(wood || previousContent) && ' '}
    {wood && <FormattedMessage id={`beverage.aged.${type}.${wood}`} />}
    {!wood && type && <FormattedMessage id={`beverage.aged.${type}`} />}
    {previousContent && ' '}
    {previousContent && (
      <>
        <FormattedMessage id="beverage.aged.previousContent.name" />{' '}
        <FormattedList mode="short">
          {previousContent.map(content => (
            <FormattedMessage
              id="beverage.aged.previousContent.content"
              key={content}
              values={{ content }}
            />
          ))}
        </FormattedList>
      </>
    )}
  </>
);

export default AgedItem;
