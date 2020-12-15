import { useContext, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';

import { AuthenticationContext } from 'utils/contexts';
import serverCall, { Endpoints, Status } from 'utils/helpers/serverCall';
import { Details } from 'utils/types/Beverage';
import InlineSpinner from 'elements/InlineSpinner';
import CloseIcon from 'elements/icons/Close';
import styles from './Notes.module.css';

const Notes: React.FC<{ details: Details }> = ({ details }) => {
  const { locale } = useIntl();
  const { token } = useContext(AuthenticationContext);

  const [status, setStatus] = useState(Status.idle);
  const [notes, setNotes] = useState('');
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    setStatus(Status.pending);

    serverCall(Endpoints.beverageAdminDetails, {
      pathParams: [details.id],
      token,
    })
      .then(({ editorial, updated }) => {
        setNotes(editorial?.notes ?? '');
        setUpdated(updated ?? null);
        setStatus(Status.resolved);
      })
      .catch(() => {
        setStatus(Status.rejected);
      });
  }, [details]);

  if (status === Status.pending) {
    return <InlineSpinner className={styles.spinner} />;
  }

  if (status === Status.rejected) {
    return <CloseIcon className={styles.closeIcon} />;
  }

  return (
    <div className={styles.notes}>
      <Markdown options={{ forceBlock: true }}>{notes}</Markdown>
      {updated && (
        <dl style={{ color: 'var(--color-grey-1)' }}>
          <dt>
            <FormattedMessage id="admin.lastTimeUpdated" />
          </dt>
          <dd>
            {format(
              new Date(updated),
              locale === 'pl' ? 'dd.MM.yyyy' : 'dd/MM/yyyy',
            )}
          </dd>
        </dl>
      )}
    </div>
  );
};

export default Notes;
