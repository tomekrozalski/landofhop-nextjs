import { FormattedMessage, useIntl } from 'react-intl';
import { format } from 'date-fns';

import { Details } from 'utils/types/Beverage';

const Added: React.FC<{ details: Details }> = ({ details }) => {
  const { locale } = useIntl();

  return (
    <>
      <dt>
        <FormattedMessage id="global.added" />
      </dt>
      <dd>
        {format(
          new Date(details.added),
          locale === 'pl' ? 'dd.MM.yyyy' : 'dd/MM/yyyy',
        )}
      </dd>
    </>
  );
};

export default Added;
