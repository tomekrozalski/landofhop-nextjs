import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { BeverageContext } from 'dashboard/utils/contexts';
import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { FormValues, validationSchema } from './utils';
import styles from '../Form.module.css';

const LabelBeverage: React.FC = () => {
  const { label } = useContext(BeverageContext);

  const { register, formState, handleSubmit } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: label,
    resolver: yupResolver(validationSchema),
  });

  const action = () => {
    console.log('!');
  };

  return (
    <form
      action="/admin"
      className={styles.form}
      noValidate
      onSubmit={handleSubmit(action)}
    >
      <header>
        <h2>
          <FormattedMessage id="admin.beverage.labelInfo.title" />
        </h2>
        <p>
          <FormattedMessage id="admin.beverage.labelInfo.description" />
        </p>
      </header>
      <div className={clsx(styles.grid, styles.basic)}>
        <Label form="label" htmlFor="badge" name="badge" required />
        <TextInput
          error={formState.errors.badge}
          form="label"
          name="badge"
          ref={register}
          required
          touched={formState.touched.badge}
        />
      </div>
      {/* -------------------------------- */}
      <h3>
        <span>
          <FormattedMessage id="admin.beverage.brandInfo" />
        </span>
      </h3>
      <div>Name</div>
    </form>
  );
};

export default LabelBeverage;
