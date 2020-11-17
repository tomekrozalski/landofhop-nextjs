import { Ingredient } from '.';

export type Ingredients = {
  description?: {
    complete: boolean;
    language: string;
    value: string;
  }[];
  list?: Ingredient[];
  smokedMalt?: boolean;
};
