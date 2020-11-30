import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Button, Label, TextInput } from 'elements';
import styles from './FormBody.module.css';

const FormBody: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    setSubmitting(true);

    setTimeout(() => {
      console.log('-->', email, password);
      setSubmitting(false);
    }, 50000);
  };

  return (
    <form
      className={styles.formBody}
      action="/admin"
      noValidate
      onSubmit={onSubmit}
    >
      <div>
        <Label form="login" htmlFor="email" name="email" required />
        <TextInput
          colorInvert
          form="login"
          name="email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          value={email}
        />
      </div>
      <div>
        <Label form="login" htmlFor="password" name="password" required />
        <TextInput
          colorInvert
          form="login"
          name="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
        />
      </div>
      <Button
        disabled={email.length < 3 || password.length < 3}
        isSubmitting={isSubmitting}
        type="submit"
      >
        <FormattedMessage id="global.submit" />
      </Button>
    </form>
  );
};

export default FormBody;
