import { useContext } from 'react';
import clsx from 'clsx';

import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import Label from 'elements/Label';
import { OpenSubform } from 'dashboard/elements';
import { CountrySelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Country: React.FC<Props> = ({ form }) => {
  const { setType } = useContext(ModalContext);

  return (
    <div className={clsx(styles.grid, styles.basic)}>
      <Label form={form} name="country" required />
      <CountrySelect form={form} name="country" />
      <OpenSubform
        label="admin.addNewCountry.title"
        onClick={() => setType(ModalEnum.country)}
      />
    </div>
  );
};

export default Country;
