import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonStyle } from 'elements/Button';
import { BeverageContext } from 'dashboard/utils/contexts';
import {
  Added,
  Aged,
  AlcoholScope,
  Clarity,
  Color,
  Contract,
  Cooperation,
  DryHopped,
  Fermentation,
  Filtration,
  Notes,
  Pasteurization,
  Place,
  Price,
  Remark,
  Style,
  Updated,
} from 'dashboard/fields';
import moveTo, { Page } from 'dashboard/BeverageData/utils/moveTo';
import styles from 'dashboard/Dashboard.module.css';
import { FormValues, validationSchema } from './utils';

const EditorialBeverage: React.FC = () => {
  const router = useRouter();
  const { editorial, saveBeverage, setEditorial } = useContext(BeverageContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: editorial,
    resolver: yupResolver(validationSchema),
  });

  const action = (values, e) => {
    if (e.nativeEvent.submitter.dataset?.type === 'moveBack') {
      setEditorial(values);
      moveTo(router, Page.producer);
    } else {
      return saveBeverage(values).then(() => {
        console.log('success!');
      });
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
        <Cooperation form="editorial" />
        <Contract form="editorial" />
        <Place form="editorial" />
        <Remark form="editorial" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brewingInfo" />
          </span>
        </h3>
        <Fermentation form="editorial" />
        <Style form="editorial" />
        <AlcoholScope form="editorial" />
        <Filtration form="editorial" />
        <Pasteurization form="editorial" />
        <Aged form="editorial" />
        <DryHopped form="editorial" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.impressionsInfo" />
          </span>
        </h3>
        <Color form="editorial" />
        <Clarity form="editorial" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.otherInfo" />
          </span>
        </h3>
        <Price form="editorial" />
        <Added form="editorial" />
        <Updated form="editorial" />
        <Notes form="editorial" />
        <footer>
          <Button
            appearance={ButtonStyle.reset}
            data-type="moveBack"
            disabled={
              !methods.formState.isValid || methods.formState.isSubmitting
            }
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
