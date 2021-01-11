import { useContext } from 'react';

import Modal from 'elements/Modal';
import { ModalContext } from 'utils/contexts';
import { Modal as ModalEnum } from 'utils/enums';
// import { Subform as CountrySubform } from 'dashboard/BeverageData/fields/Country';
// import { Subform as IngredientSubform } from 'dashboard/BeverageData/fields/IngredientsList';
import { Institution } from '.';
// import LanguageSubform from 'dashboard/BeverageData/elements/Navigation/Aside/Language';
// import { Subform as PlaceSubform } from 'dashboard/BeverageData/fields/Place';
import styles from './EditModal.module.css';

const EditModal: React.FC = () => {
  const { setType, type } = useContext(ModalContext);
  const close = () => setType(null);

  const getContent = () => {
    switch (type) {
      // case SubformEnum.country:
      //   return <CountrySubform close={() => setSubform(SubformEnum.place)} />;
      // case SubformEnum.ingredient:
      //   return <IngredientSubform close={close} />;
      // case SubformEnum.institution:
      //   return <InstitutionSubform close={close} />;
      // case SubformEnum.language:
      //   return <LanguageSubform close={close} />;
      // case SubformEnum.place:
      //   return <PlaceSubform close={close} />;
      default:
        return null;
    }
  };

  return (
    <Modal className={styles.editModal} close={close} isVisible={!!type}>
      {type === ModalEnum.institution && <Institution close={close} />}
    </Modal>
  );
};

export default EditModal;
