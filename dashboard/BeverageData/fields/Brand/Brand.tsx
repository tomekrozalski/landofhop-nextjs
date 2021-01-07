import { useContext } from 'react';
import clsx from 'clsx';

import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import Label from 'elements/Label';
import { OpenSubform } from 'dashboard/BeverageData/elements';
import { InstitutionSelect } from 'dashboard/BeverageData/elements/Select';
import styles from 'dashboard/BeverageData/Form.module.css';

type Props = {
  disabled?: boolean;
};

const Brand: React.FC<Props> = ({ disabled }) => {
  const { setType } = useContext(ModalContext);

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
        onClick={() => setType(ModalEnum.institution)}
      />
    </div>
  );
};

export default Brand;
