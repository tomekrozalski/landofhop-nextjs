import { FormattedMessage } from 'react-intl';

import HeadTitle from 'elements/HeadTitle';
import Modals from 'dashboard/Modals';
import { DashboardWrapper, ProgressList } from 'dashboard/elements';
import Form from './Form';

const Add: React.FC = () => (
  <article>
    <h1>
      <FormattedMessage id="admin.beverage.add" />
    </h1>
    <ProgressList />
    <Form />
    <Modals />
    <HeadTitle title="addBeverage" />
  </article>
);

export default DashboardWrapper(Add);
