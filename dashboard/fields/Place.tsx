import { useContext } from 'react';
import clsx from 'clsx';

import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import Label from 'elements/Label';
import { Condition, OpenSubform } from 'dashboard/elements';
import { PlaceSelect } from 'dashboard/elements/Select';
import styles from 'dashboard/Dashboard.module.css';

type Props = {
  form: string;
};

const Place: React.FC<Props> = ({ form }) => {
  const { setType } = useContext(ModalContext);

  return (
    <div className={clsx(styles.grid, styles.optional)}>
      <Label form={form} name="place" />
      <Condition
        form={form}
        initialValue={{ value: { value: '' } }}
        name="place"
      />
      <PlaceSelect defaultValue="" form={form} name="place" />
      <OpenSubform
        label="admin.addNewPlace"
        onClick={() => setType(ModalEnum.place)}
      />
    </div>
  );
};

export default Place;
