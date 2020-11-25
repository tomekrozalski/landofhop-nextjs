import { LanguageValue } from 'utils/types/common';
import { IngredientType } from 'utils/enums/Beverage';

export type DryHopped = {
  id: string;
  name: LanguageValue[];
  type: IngredientType;
};
