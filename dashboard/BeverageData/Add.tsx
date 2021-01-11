import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

import HeadTitle from 'elements/HeadTitle';
import EditModal from 'dashboard/EditModal';
import { DashboardWrapper, ProgressList } from 'dashboard/elements';
import { Label } from '.';

const Add: React.FC = () => {
  const { query } = useRouter();
  const page = query?.part ?? 'label';

  return (
    <article>
      <h1>
        <FormattedMessage id="admin.beverage.add" />
      </h1>
      <ProgressList />
      {page === 'label' && <Label />}
      {page === 'producer' && <div>producer</div>}
      {page === 'editorial' && <div>editorial</div>}
      <EditModal />
      <HeadTitle title="addBeverage" />
    </article>
  );
};

export default DashboardWrapper(Add);
