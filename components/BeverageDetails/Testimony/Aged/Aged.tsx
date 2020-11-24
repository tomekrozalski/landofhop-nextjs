import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import { FormattedList } from 'elements';
import AgedItem from './AgedItem';

const Aged: React.FC<{ details: Details }> = ({ details }) =>
  details.isAged ? (
    <>
      <dt>
        <FormattedMessage id="global.aged" />
      </dt>
      <dd>
        {details.isAged && details.isAged.label && (
          <>
            {details.aged && details.aged.label ? (
              <FormattedList mode="long">
                {details.aged.label.map((props, i) => (
                  <em className="source-item label">
                    <AgedItem {...props} key={i} />
                  </em>
                ))}
              </FormattedList>
            ) : (
              <FormattedMessage id="global.confirmation" />
            )}
          </>
        )}
        {details.isAged && details.isAged.producer && (
          <>
            {details.aged && details.aged.producer ? (
              <FormattedList mode="long">
                {details.aged.producer.map((props, i) => (
                  <em className="source-item producer">
                    <AgedItem {...props} key={i} />
                  </em>
                ))}
              </FormattedList>
            ) : (
              <FormattedMessage id="global.confirmation" />
            )}
          </>
        )}
        {details.isAged && details.isAged.editorial && (
          <>
            {details.aged && details.aged.editorial ? (
              <FormattedList mode="long">
                {details.aged.editorial.map((props, i) => (
                  <em className="source-item editorial">
                    <AgedItem {...props} key={i} />
                  </em>
                ))}
              </FormattedList>
            ) : (
              <FormattedMessage id="global.confirmation" />
            )}
          </>
        )}
      </dd>
    </>
  ) : null;

export default Aged;
