import { IngredientType } from 'utils/enums/Beverage';
import { LanguageValue } from 'utils/types/common';

export type Ingredient = {
  badge: string;
  id: string;
  name: LanguageValue[];
  type: IngredientType;
  parent?: string;
};
