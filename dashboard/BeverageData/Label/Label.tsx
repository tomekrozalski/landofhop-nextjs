import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'elements/Button';
import { BeverageContext } from 'dashboard/utils/contexts';
import {
  Aged,
  Alcohol,
  Badge,
  Barcode,
  Bitterness,
  Brand,
  Container,
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
  Name,
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

const LabelBeverage: React.FC = () => {
  const router = useRouter();
  const { label, setLabel } = useContext(BeverageContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: label,
    resolver: yupResolver(validationSchema),
  });

  const action = values => {
    setLabel(values);
    moveTo(router, Page.producer);
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
        <Remark form="label" />
        <Tale form="label" />
        <Barcode form="label" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.brewingInfo" />
          </span>
        </h3>
        <Fermentation form="label" />
        <Style form="label" />
        <Extract form="label" />
        <Alcohol form="label" />
        <Filtration form="label" />
        <Pasteurization form="label" />
        <Aged form="label" />
        <DryHopped form="label" />
        <HopRate form="label" />
        <ExpirationDate form="label" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.ingredientsInfo" />
          </span>
        </h3>
        <IngredientsDescription form="label" />
        <IngredientsList form="label" />
        <SmokedMalt form="label" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.impressionsInfo" />
          </span>
        </h3>
        <Bitterness form="label" />
        <Sweetness form="label" />
        <Fullness form="label" />
        <Power form="label" />
        <Hoppyness form="label" />
        <Temperature form="label" />
        {/* -------------------------------- */}
        <h3>
          <span>
            <FormattedMessage id="admin.beverage.otherInfo" />
          </span>
        </h3>
        <Container form="label" />
        <Price form="label" />
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
