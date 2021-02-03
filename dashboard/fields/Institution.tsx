import { useContext } from 'react';
import clsx from 'clsx';

import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import Label from 'elements/Label';
import { OpenSubform } from 'dashboard/elements';
import { InstitutionSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Institution: React.FC<Props> = ({ form }) => {
  const { setType } = useContext(ModalContext);

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form={form} name="institution" required />
      <InstitutionSelect
        defaultValue=""
        form={form}
        name="institution"
        style={{ gridColumn: '2/3' }}
      />
      <OpenSubform
        label="admin.addNewInstitution"
        onClick={() => setType(ModalEnum.institution)}
      />
    </div>
  );
};

export default Institution;
