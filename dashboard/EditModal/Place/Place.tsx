import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'elements/Button';
import { PlaceContext } from 'dashboard/utils/contexts';
import {
  City,
  Country,
  Institution,
  Latitude,
  Longitude,
} from 'dashboard/fields';
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

const Place: React.FC<Props> = ({ close }) => {
  const { addNewPlace } = useContext(PlaceContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const action = values => {
    const formattedValues = formatValues(values);

    return addNewPlace(formattedValues)
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
          <FormattedMessage id="admin.addNewPlace.title" />
        </h1>
        <City form="place" />
        <Country form="place" />
        <Institution form="place" />
        <Longitude form="place" />
        <Latitude form="place" />
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

export default Place;
