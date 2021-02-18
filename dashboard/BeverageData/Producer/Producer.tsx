import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonStyle } from 'elements/Button';
import { BeverageContext } from 'dashboard/utils/contexts';
import {
  Aged,
  Alcohol,
  Bitterness,
  Contract,
  Cooperation,
  DryHopped,
  ExpirationDate,
  Extract,
  Fermentation,
  Filtration,
  Fullness,
  Hoppyness,
  HopRate,
  IngredientsDescription,
  IngredientsList,
  Pasteurization,
  Place,
  Power,
  Price,
  Remark,
  Series,
  SmokedMalt,
  Style,
  Sweetness,
  Tale,
  Temperature,
} from 'dashboard/fields';
import moveTo, { Page } from 'dashboard/BeverageData/utils/moveTo';
import styles from 'dashboard/Dashboard.module.css';
import { FormValues, validationSchema } from './utils';

const ProducerBeverage: React.FC = () => {
  const router = useRouter();
  const { producer, setProducer } = useContext(BeverageContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: producer,
    resolver: yupResolver(validationSchema),
  });

  const action = (values, e) => {
    setProducer(values);
    moveTo(
      router,
      e.nativeEvent.submitter.dataset?.type === 'moveBack'
        ? Page.label
        : Page.editorial,
    );
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
        <Cooperation form="producer" />
        <Contract form="producer" />
        <Place form="producer" />
        <Remark form="producer" />
        <Tale form="producer" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brewingInfo" />
          </span>
        </h3>
        <Fermentation form="producer" />
        <Style form="producer" />
        <Extract form="producer" />
        <Alcohol form="producer" />
        <Filtration form="producer" />
        <Pasteurization form="producer" />
        <Aged form="producer" />
        <DryHopped form="producer" />
        <HopRate form="producer" />
        <ExpirationDate form="producer" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.ingredientsInfo" />
          </span>
        </h3>
        <IngredientsDescription form="producer" />
        <IngredientsList form="producer" />
        <SmokedMalt form="producer" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.impressionsInfo" />
          </span>
        </h3>
        <Bitterness form="producer" />
        <Sweetness form="producer" />
        <Fullness form="producer" />
        <Power form="producer" />
        <Hoppyness form="producer" />
        <Temperature form="producer" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.otherInfo" />
          </span>
        </h3>
        <Price form="producer" />
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

export default ProducerBeverage;
