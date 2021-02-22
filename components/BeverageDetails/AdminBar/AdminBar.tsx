import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

import { Details } from 'utils/types/Beverage';
import Button from 'elements/Button';
import Notes from './Notes';
import RemoveBeverage from './RemoveBeverage';
import styles from './AdminBar.module.css';

const AdminBar: React.FC<{ details: Details }> = ({ details }) => {
  const { push } = useRouter();

  return (
    <>
      <div className={styles.buttonsWrapper}>
        <Button
          onClick={() =>
            push({
              pathname: '/update-beverage',
              query: { id: details.id },
            })
          }
        >
          <FormattedMessage id="admin.update" />
        </Button>
        <Button onClick={() => push('/update-beverage-images')}>
          <FormattedMessage id="admin.updatePhotos" />
        </Button>
        <RemoveBeverage details={details} />
      </div>
      <Notes details={details} />
    </>
  );
};

export default AdminBar;
