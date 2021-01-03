import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { BeverageContext } from 'dashboard/utils/contexts';
import Button from 'elements/Button';
import { Badge, Brand, Name, Series } from 'dashboard/BeverageData/fields';
import { FormValues, validationSchema } from './utils';
import styles from '../Form.module.css';

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
        <Badge />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brandInfo" />
          </span>
        </h3>
        <Name />
        <Series />
        <Brand />
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
