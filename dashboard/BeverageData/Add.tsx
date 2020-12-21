import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

// import { Spinner } from 'elements';

import { DashboardWrapper } from 'dashboard/elements';
import { BeverageContext } from 'dashboard/utils/contexts';
// import { DashboardModal } from 'dashboard/elements';
// import { Navigation } from './elements';
// import { Form } from '.';

const Add: React.FC = () => {
  const { label, status } = useContext(BeverageContext);

  console.log('status', status);
  console.log('label', label);

  return (
    <article>
      <h1>
        <FormattedMessage id="admin.addBeverage.title" />
      </h1>
      {/* <Navigation /> */}
      {/* {beverageDataLoadStatus !== StatusEnum.idle ? <Spinner /> : <Form />} */}
      {/* <DashboardModal /> */}
    </article>
  );
};

export default DashboardWrapper(Add);
