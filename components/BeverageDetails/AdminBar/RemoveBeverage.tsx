import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

import { Details } from 'utils/types/Beverage';
import serverCall, { Endpoints } from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
import Button, { ButtonStyle } from 'elements/Button';

const RemoveBeverage: React.FC<{ details: Details }> = ({ details }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState(false);
  const { token } = useContext(AuthenticationContext);
  const { push } = useRouter();

  useEffect(() => {
    setReady(false);
  }, [details.id]);

  const timeToThink = () => {
    setSubmitting(true);

    setTimeout(() => {
      setReady(true);
      setSubmitting(false);
    }, 1500);
  };

  const removeCall = () => {
    setSubmitting(true);

    console.log('removeCall');

    serverCall(Endpoints.removeBeverage, {
      body: JSON.stringify({ id: details.id }),
      method: 'DELETE',
      token,
    })
      .then(() => {
        setSubmitting(false);
        push('/');
      })
      .catch(error => {
        console.log({ error });
        setSubmitting(false);
      });
  };

  return (
    <Button
      appearance={ButtonStyle.reset}
      isSubmitting={isSubmitting}
      onClick={ready ? removeCall : timeToThink}
    >
      <FormattedMessage
        id={`admin.removeBeverage.${ready ? 'confirm' : 'remove'}`}
      />
    </Button>
  );
};

export default RemoveBeverage;
