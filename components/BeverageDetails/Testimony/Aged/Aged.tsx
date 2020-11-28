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
          <span className="source-item">
            {details.aged && details.aged.label ? (
              <FormattedList mode="long">
                {details.aged.label.map((props, i) => (
                  <em key={i} className="label">
                    <AgedItem {...props} />
                  </em>
                ))}
              </FormattedList>
            ) : (
              <FormattedMessage id="global.confirmation" />
            )}
          </span>
        )}
        {details.isAged && details.isAged.producer && (
          <span className="source-item">
            {details.aged && details.aged.producer ? (
              <FormattedList mode="long">
                {details.aged.producer.map((props, i) => (
                  <em key={i} className="producer">
                    <AgedItem {...props} />
                  </em>
                ))}
              </FormattedList>
            ) : (
              <FormattedMessage id="global.confirmation" />
            )}
          </span>
        )}
        {details.isAged && details.isAged.editorial && (
          <span className="source-item">
            {details.aged && details.aged.editorial ? (
              <FormattedList mode="long">
                {details.aged.editorial.map((props, i) => (
                  <em key={i} className="editorial">
                    <AgedItem {...props} />
                  </em>
                ))}
              </FormattedList>
            ) : (
              <FormattedMessage id="global.confirmation" />
            )}
          </span>
        )}
      </dd>
    </>
  ) : null;

export default Aged;
