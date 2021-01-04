import { useEffect } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import slugify from 'slugify';

import Label from 'elements/Label';
import TextInput from 'elements/TextInput';
import { OpenSubform } from 'dashboard/BeverageData/elements';
import { InstitutionSelect } from 'dashboard/BeverageData/elements/Select';
import styles from 'dashboard/BeverageData/Form.module.css';

type Props = {
  disabled?: boolean;
};

const Brand: React.FC<Props> = ({ disabled }) => {
  const { formState, register } = useFormContext();

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form="label" htmlFor="brand" name="brand" required />
      <InstitutionSelect
        defaultValue=""
        name="brand"
        style={{ gridColumn: '2/3' }}
      />
      <OpenSubform
        label="admin.addNewInstitution.title"
        onClick={() => console.log('bum')}
      />
    </div>
  );
};

export default Brand;
