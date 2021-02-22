import { useContext, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import Spinner from 'elements/Spinner';
import HeadTitle from 'elements/HeadTitle';
import { BeverageContext } from 'dashboard/utils/contexts';
import EditModal from 'dashboard/EditModal';
import { DashboardWrapper, ProgressList } from 'dashboard/elements';
import { Editorial, Label, Producer } from '.';

const Update: React.FC = () => {
  const { getBeverageDetails, status } = useContext(BeverageContext);
  const { query } = useRouter();
  const page = query?.part ?? 'label';

  useEffect(() => {
    getBeverageDetails(query.id as string);
  }, []);

  if (status === StatusEnum.pending) {
    return <Spinner />;
  }

  return (
    <article>
      <h1>
        <FormattedMessage id="admin.beverage.add" />
      </h1>
      <ProgressList />
      {page === 'label' && <Label />}
      {page === 'producer' && <Producer />}
      {page === 'editorial' && <Editorial />}
      <EditModal />
      <HeadTitle title="addBeverage" />
    </article>
  );
};

export default DashboardWrapper(Update);
