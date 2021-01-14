import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
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

  const methods = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form
        className={styles.formBody}
        action="/admin"
        noValidate
        onSubmit={methods.handleSubmit(logIn)}
      >
        <div>
          <Label form="login" name="email" required />
          <TextInput colorInvert form="login" name="email" type="email" />
        </div>
        <div>
          <Label form="login" name="password" required />
          <TextInput colorInvert form="login" name="password" type="password" />
        </div>
        <Button
          disabled={!methods.formState.isValid}
          isSubmitting={methods.formState.isSubmitting}
          type="submit"
        >
          <FormattedMessage id="global.submit" />
        </Button>
      </form>
    </FormProvider>
  );
};

export default FormBody;
