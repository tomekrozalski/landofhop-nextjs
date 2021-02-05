import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from 'elements/Button';
import { IngredientContext } from 'dashboard/utils/contexts';
import {
  Badge,
  IngredientParent,
  IngredientType,
  Name,
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

const Ingredient: React.FC<Props> = ({ close }) => {
  const { addNewIngredient } = useContext(IngredientContext);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema()),
  });

  const action = values => {
    const formattedValues = formatValues(values);

    return addNewIngredient(formattedValues)
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
          <FormattedMessage id="admin.addNewIngredient" />
        </h1>
        <Badge form="ingredient" />
        <Name form="ingredient" />
        <IngredientType form="ingredient" />
        <IngredientParent form="ingredient" />
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

export default Ingredient;
