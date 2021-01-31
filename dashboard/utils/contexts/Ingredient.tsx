import React, { useContext, useEffect, useState } from 'react';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
// import { PlaceOutput } from 'dashboard/EditModal/Place/utils/formatValues';
import { Ingredient as IngredientType } from 'dashboard/utils/types';

export const IngredientContext = React.createContext({
  // addNewPlace: ({}: PlaceOutput) => new Promise(resolve => resolve(true)),
  ingredients: [] as IngredientType[],
  status: StatusEnum.idle,
});

const Ingredient: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  const getIngredients = () => {
    setStatus(StatusEnum.pending);

    serverCall(Endpoints.ingredient, { token })
      .then((ingredients: IngredientType[]) => {
        setIngredients(ingredients);
        setStatus(StatusEnum.resolved);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  };

  useEffect(getIngredients, []);

  // const addNewPlace = (request: PlaceOutput) =>
  //   new Promise((resolve, reject) => {
  //     setStatus(StatusEnum.pending);

  //     serverCall(Endpoints.addPlace, {
  //       method: 'POST',
  //       body: JSON.stringify(request),
  //       token,
  //     })
  //       .then((places: PlaceType[]) => {
  //         setPlaces(places);
  //         setStatus(StatusEnum.resolved);
  //         resolve(true);
  //       })
  //       .catch(() => {
  //         setStatus(StatusEnum.rejected);
  //         reject();
  //       });
  //   });

  return (
    <IngredientContext.Provider
      value={{
        // addNewPlace,
        ingredients,
        status,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};

export default Ingredient;
