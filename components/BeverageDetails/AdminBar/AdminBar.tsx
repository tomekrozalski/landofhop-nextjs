import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import Button, { ButtonStyle } from 'elements/Button';
import Notes from './Notes';
import styles from './AdminBar.module.css';

const AdminBar: React.FC<{ details: Details }> = ({ details }) => {
  return (
    <>
      <div className={styles.buttonsWrapper}>
        <Button onClick={() => console.log('!')}>
          <FormattedMessage id="admin.update" />
        </Button>
        <Button onClick={() => console.log('!')}>
          <FormattedMessage id="admin.updatePhotos" />
        </Button>
        <Button appearance={ButtonStyle.reset} onClick={() => console.log('!')}>
          <FormattedMessage id="admin.removeBeverage" />
        </Button>
      </div>
      <Notes details={details} />
    </>
  );
};

export default AdminBar;
