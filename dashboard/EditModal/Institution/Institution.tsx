import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'elements/Button';
import { Badge, Name } from 'dashboard/fields';
import styles from 'dashboard/Dashboard.module.css';
import { FormValues, initialValues, validationSchema } from './utils';

type Props = {
  close: () => void;
};

const Institution: React.FC<Props> = () => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const action = values => {
    console.log('!', values);
  };

  return (
    <FormProvider {...methods}>
      <form
        action="/admin"
        className={styles.form}
        noValidate
        onSubmit={methods.handleSubmit(action)}
      >
        <h1>
          <FormattedMessage id="admin.addNewInstitution.title" />
        </h1>
        <Badge />
        <Name />
        <footer>
          <Button
            disabled={!methods.formState.isValid}
            isSubmitting={methods.formState.isSubmitting}
            type="submit"
          >
            <FormattedMessage id="global.continue" />
          </Button>
        </footer>
      </form>
    </FormProvider>
  );
};

export default Institution;
