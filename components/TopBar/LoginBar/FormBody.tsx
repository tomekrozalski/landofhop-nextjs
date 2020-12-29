import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from 'elements/Button';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
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
  const { register, formState, handleSubmit } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <form
      className={styles.formBody}
      action="/admin"
      noValidate
      onSubmit={handleSubmit(logIn)}
    >
      <div>
        <Label form="login" htmlFor="email" name="email" required />
        <TextInput
          colorInvert
          error={formState.errors.email}
          form="login"
          name="email"
          ref={register}
          touched={formState.touched.email}
          type="email"
        />
      </div>
      <div>
        <Label form="login" htmlFor="password" name="password" required />
        <TextInput
          colorInvert
          error={formState.errors.password}
          form="login"
          name="password"
          ref={register}
          touched={formState.touched.password}
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
