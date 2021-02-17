import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonStyle } from 'elements/Button';
import { BeverageContext } from 'dashboard/utils/contexts';
import { Series } from 'dashboard/fields';
import moveTo, { Page } from 'dashboard/BeverageData/utils/moveTo';
import styles from 'dashboard/Dashboard.module.css';
import { FormValues, validationSchema } from './utils';

const ProducerBeverage: React.FC = () => {
  const router = useRouter();
  const { label, setLabel } = useContext(BeverageContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      series: [],
    },
    //resolver: yupResolver(validationSchema),
  });

  const action = values => {
    console.log('?', values);
    //setLabel(values);
    //moveTo(router, Page.producer);
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
            <FormattedMessage id="admin.beverage.producerInfo.title" />
          </h2>
          <p>
            <FormattedMessage id="admin.beverage.producerInfo.description" />
          </p>
        </header>
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brandInfo" />
          </span>
        </h3>
        <Series form="producer" />
        <footer>
          <Button
            appearance={ButtonStyle.reset}
            disabled={!methods.formState.isValid}
            isSubmitting={methods.formState.isSubmitting}
            onClick={() => moveTo(router, Page.label)}
            type="submit"
          >
            <FormattedMessage id="admin.saveAndMoveBack" />
          </Button>
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

export default ProducerBeverage;
