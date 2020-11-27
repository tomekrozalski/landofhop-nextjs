import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

import { HeadTitle } from 'elements';

const NotFoundPage: React.FC = () => {
  const [seconds, setSeconds] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 1) {
      router.push('/');
    }

    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <div className="error-wrapper">
      <HeadTitle title="notFound" />
      <h1>
        <FormattedMessage id="errors.notFound.title" />
      </h1>
      <p>
        <FormattedMessage id="errors.notFound.body" values={{ seconds }} />
      </p>
    </div>
  );
};

export default NotFoundPage;
