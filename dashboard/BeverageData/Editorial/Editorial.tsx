import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonStyle } from 'elements/Button';
import { BeverageContext } from 'dashboard/utils/contexts';
import {
  Aged,
  AlcoholScope,
  Clarity,
  Color,
  Contract,
  Cooperation,
  DryHopped,
  Fermentation,
  Filtration,
  Pasteurization,
  Place,
  Price,
  Remark,
  Style,
} from 'dashboard/fields';
import moveTo, { Page } from 'dashboard/BeverageData/utils/moveTo';
import styles from 'dashboard/Dashboard.module.css';
import { FormValues, validationSchema } from './utils';

const EditorialBeverage: React.FC = () => {
  const router = useRouter();
  const { editorial, setEditorial } = useContext(BeverageContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: editorial,
    resolver: yupResolver(validationSchema),
  });

  const action = (values, e) => {
    setEditorial(values);

    if (e.nativeEvent.submitter.dataset?.type === 'moveBack') {
      moveTo(router, Page.producer);
    } else {
      console.log('send data', values);
    }
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
            <FormattedMessage id="admin.beverage.editorialInfo.title" />
          </h2>
          <p>
            <FormattedMessage id="admin.beverage.editorialInfo.description" />
          </p>
        </header>
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brandInfo" />
          </span>
        </h3>
        <Cooperation form="producer" />
        <Contract form="producer" />
        <Place form="producer" />
        <Remark form="producer" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brewingInfo" />
          </span>
        </h3>
        <Fermentation form="producer" />
        <Style form="producer" />
        <AlcoholScope form="producer" />
        <Filtration form="producer" />
        <Pasteurization form="producer" />
        <Aged form="producer" />
        <DryHopped form="producer" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.impressionsInfo" />
          </span>
        </h3>
        <Color form="producer" />
        <Clarity form="producer" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.otherInfo" />
          </span>
        </h3>
        <Price form="producer" />
        {/* <Added form="producer" /> */}
        {/* <Updated form="producer" /> */}
        {/* <Notes form="producer" /> */}
        <footer>
          <Button
            appearance={ButtonStyle.reset}
            data-type="moveBack"
            disabled={!methods.formState.isValid}
            isSubmitting={methods.formState.isSubmitting}
            type="submit"
          >
            <FormattedMessage id="admin.saveAndMoveBack" />
          </Button>
          <Button
            data-type="moveOn"
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

export default EditorialBeverage;
