import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { BeverageContext } from 'dashboard/utils/contexts';
import Button from 'elements/Button';
import {
  Aged,
  Alcohol,
  Badge,
  Barcode,
  Brand,
  Contract,
  Cooperation,
  DryHopped,
  Extract,
  Fermentation,
  Filtration,
  Name,
  Pasteurization,
  Place,
  Remark,
  Series,
  Style,
  Tale,
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
