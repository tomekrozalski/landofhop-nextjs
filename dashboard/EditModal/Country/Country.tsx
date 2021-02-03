import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'elements/Button';
import { CountryContext } from 'dashboard/utils/contexts';
import { Code, Name } from 'dashboard/fields';
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

const Country: React.FC<Props> = ({ close }) => {
  const { addCountry, countries } = useContext(CountryContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema(countries.map(({ code }) => code))),
  });

  const action = values => {
    const formattedValues = formatValues(values);

    return addCountry(formattedValues)
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
          <FormattedMessage id="admin.addNewCountry" />
        </h1>
        <Code form="country" />
        <Name form="country" />
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

export default Country;
