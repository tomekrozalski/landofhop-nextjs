import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { BeverageContext } from 'dashboard/utils/contexts';
import Button from 'elements/Button';
import {
  Badge,
  Brand,
  Contract,
  Cooperation,
  Name,
  Place,
  Series,
} from 'dashboard/fields';
import styles from 'dashboard/Dashboard.module.css';
import { FormValues, validationSchema } from './utils';

const LabelBeverage: React.FC = () => {
  const { label } = useContext(BeverageContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: label,
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
        <header>
          <h2>
            <FormattedMessage id="admin.beverage.labelInfo.title" />
          </h2>
          <p>
            <FormattedMessage id="admin.beverage.labelInfo.description" />
          </p>
        </header>
        <Badge form="label" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brandInfo" />
          </span>
        </h3>
        <Name form="label" languageIcon />
        <Series form="label" />
        <Brand form="label" />
        <Cooperation form="label" />
        <Contract form="label" />
        <Place form="label" />
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

export default LabelBeverage;
