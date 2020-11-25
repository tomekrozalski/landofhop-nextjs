import { Ingredient, IngredientsDescription } from '.';

export type Ingredients = {
  description?: IngredientsDescription[];
  list?: Ingredient[];
  smokedMalt?: boolean;
};
