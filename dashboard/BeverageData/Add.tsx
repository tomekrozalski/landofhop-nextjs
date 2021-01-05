import { FormattedMessage } from 'react-intl';

import HeadTitle from 'elements/HeadTitle';
import { DashboardModal, DashboardWrapper } from 'dashboard/elements';
import { ProgressList } from './elements';
import Form from './Form';

const Add: React.FC = () => (
  <article>
    <h1>
      <FormattedMessage id="admin.beverage.add" />
    </h1>
    <ProgressList />
    <Form />
    <DashboardModal />
    <HeadTitle title="addBeverage" />
  </article>
);

export default DashboardWrapper(Add);
