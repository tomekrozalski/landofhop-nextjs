import { useContext } from 'react';

import Modal from 'elements/Modal';
import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
import { Country, Ingredient, Institution, Language, Place } from '.';
import styles from './EditModal.module.css';

const EditModal: React.FC = () => {
  const { setType, type } = useContext(ModalContext);
  const close = () => setType(null);

  return (
    <Modal className={styles.editModal} close={close} isVisible={!!type}>
      {type === ModalEnum.institution && <Institution close={close} />}
      {type === ModalEnum.language && <Language close={close} />}
      {type === ModalEnum.place && <Place close={close} />}
      {type === ModalEnum.country && <Country close={close} />}
      {type === ModalEnum.ingredient && <Ingredient close={close} />}
    </Modal>
  );
};

export default EditModal;
