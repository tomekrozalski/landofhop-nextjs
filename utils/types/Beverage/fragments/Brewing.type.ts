import { LanguageValue } from 'utils/types/common';
import {
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  Category,
  ExpirationDateUnit,
  ExtractRelate,
  ExtractUnit,
  Fermentation,
  HopRateUnit,
} from 'utils/enums/Beverage';
import { Aged, Ingredient } from '.';

export type Brewing = {
  beverageType?: Category;
  fermentation?: Fermentation[];
  extract?: {
    relate: ExtractRelate;
    unit: ExtractUnit;
    value: number;
  };
  alcohol?: {
    relate: AlcoholRelate;
    unit: AlcoholUnit;
    value: number;
    scope?: AlcoholScope;
  };
  filtration?: boolean;
  pasteurization?: boolean;
  aged?: Aged[];
  style?: LanguageValue[];
  isDryHopped?: boolean;
  dryHopped?: {
    hops: {
      type: Ingredient[];
    };
  };
  hopRate?: {
    unit: HopRateUnit;
    value: number;
  };
  expirationDate?: {
    value: number;
    unit: ExpirationDateUnit;
  };
};
