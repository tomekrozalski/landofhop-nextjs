import { LanguageValue } from 'utils/types/common';
import { IngredientType } from 'utils/enums/Beverage';

export type Ingredient = {
  id: string;
  badge: string;
  name: LanguageValue[];
  type: IngredientType;
};
