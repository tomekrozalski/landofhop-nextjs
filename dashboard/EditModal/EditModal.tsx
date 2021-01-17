import { useContext } from 'react';

import Modal from 'elements/Modal';
import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import { Institution, Language } from '.';
import styles from './EditModal.module.css';

const EditModal: React.FC = () => {
  const { setType, type } = useContext(ModalContext);
  const close = () => setType(null);

  return (
    <Modal className={styles.editModal} close={close} isVisible={!!type}>
      {type === ModalEnum.institution && <Institution close={close} />}
      {type === ModalEnum.language && <Language close={close} />}
    </Modal>
  );
};

export default EditModal;
