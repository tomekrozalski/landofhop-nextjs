import React, { useContext, useState } from 'react';

import Modal from 'elements/Modal';
// import { NavigationContext } from 'dashboard/utils/contexts';
// import { Subform as CountrySubform } from 'dashboard/BeverageData/fields/Country';
// import { Subform as IngredientSubform } from 'dashboard/BeverageData/fields/IngredientsList';
import { Subform as InstitutionSubform } from 'dashboard/BeverageData/fields/Brand';
// import LanguageSubform from 'dashboard/BeverageData/elements/Navigation/Aside/Language';
// import { Subform as PlaceSubform } from 'dashboard/BeverageData/fields/Place';

enum Subform {
  country = 'country',
  ingredient = 'ingredient',
  institution = 'institution',
  language = 'language',
  place = 'place',
}

const DashboardModal: React.FC = () => {
  const [subform, setSubform] = useState(null);
  // const { setSubform, subform } = useContext(NavigationContext);
  const close = () => setSubform(null);

  const getContent = () => {
    switch (subform) {
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
    <Modal close={close} isVisible={!!subform}>
      {subform === Subform.institution && <InstitutionSubform close={close} />}
    </Modal>
  );
};

export default DashboardModal;
