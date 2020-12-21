import { FormattedMessage } from 'react-intl';

import HeadTitle from 'elements/HeadTitle';

const NotLoggedIn = () => (
  <div className="error-wrapper">
    <HeadTitle title="accessDenied" />
    <h1>
      <FormattedMessage id="errors.notLoggedIn" />
    </h1>
  </div>
);

export default NotLoggedIn;
