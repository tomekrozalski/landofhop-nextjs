import React, { useContext, useEffect, useState } from 'react';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
import { IngredientOutput } from 'dashboard/EditModal/Ingredient/utils/formatValues';
import { Ingredient as IngredientType } from 'dashboard/utils/types';

export const IngredientContext = React.createContext({
  addNewIngredient: ({}: IngredientOutput) =>
    new Promise(resolve => resolve(true)),
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

  const addNewIngredient = (request: IngredientOutput) =>
    new Promise((resolve, reject) => {
      setStatus(StatusEnum.pending);

      serverCall(Endpoints.addIngredient, {
        method: 'POST',
        body: JSON.stringify(request),
        token,
      })
        .then((ingredients: IngredientType[]) => {
          setIngredients(ingredients);
          setStatus(StatusEnum.resolved);
          resolve(true);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
          reject();
        });
    });

  return (
    <IngredientContext.Provider
      value={{
        addNewIngredient,
        ingredients,
        status,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};

export default Ingredient;
