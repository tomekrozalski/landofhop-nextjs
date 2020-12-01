import { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Button, Label, TextInput } from 'elements';
import { AuthenticationContext } from 'utils/contexts';
import styles from './FormBody.module.css';

type FormData = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required(),
});

const FormBody: React.FC = () => {
  const { logIn } = useContext(AuthenticationContext);
  const {
    register,
    formState,
    handleSubmit,
    watch,
    errors,
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(data => {
    logIn(data).then(() => {
      console.log('!');
    });
  });

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
          ref={register}
          type="email"
        />
      </div>
      <div>
        <Label form="login" htmlFor="password" name="password" required />
        <TextInput
          colorInvert
          form="login"
          name="password"
          ref={register}
          type="password"
        />
      </div>
      <Button
        disabled={!formState.isValid}
        isSubmitting={formState.isSubmitting}
        type="submit"
      >
        <FormattedMessage id="global.submit" />
      </Button>
    </form>
  );
};

export default FormBody;
