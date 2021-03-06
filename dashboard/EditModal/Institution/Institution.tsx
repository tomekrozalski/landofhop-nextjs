import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'elements/Button';
import { InstitutionContext } from 'dashboard/utils/contexts';
import { Badge, Name, OwnedBy, Website } from 'dashboard/fields';
import styles from 'dashboard/Dashboard.module.css';
import {
  formatValues,
  FormValues,
  initialValues,
  validationSchema,
} from './utils';

type Props = {
  close: () => void;
};

const Institution: React.FC<Props> = ({ close }) => {
  const { addNewInstitution } = useContext(InstitutionContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const action = values => {
    const formattedValues = formatValues(values);

    return addNewInstitution(formattedValues)
      .then(close)
      .catch(e => console.log('Error', e));
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
          <FormattedMessage id="admin.addNewInstitution" />
        </h1>
        <Badge form="institution" />
        <Name form="institution" />
        <OwnedBy form="institution" />
        <Website form="institution" />
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
