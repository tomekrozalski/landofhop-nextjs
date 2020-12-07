import { LanguageValue } from 'utils/types/common';
import {
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  Category,
  Clarity,
  ExpirationDateUnit,
  ExtractRelate,
  ExtractUnit,
  Fermentation,
  HopRateUnit,
  IngredientType,
  TemperatureUnit,
} from 'utils/enums/Beverage';
import { Aged, Container, Price, Tale } from './fragments';

export type Details = {
  id: string;
  shortId: string;
  badge: string;
  name: LanguageValue;
  series?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
  };
  brand: {
    badge: string;
    name: LanguageValue;
    consortium?: LanguageValue;
    shortId: string;
  };
  cooperation?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
    editorial?: LanguageValue[];
  };
  contract?: {
    label?: LanguageValue;
    producer?: LanguageValue;
    editorial?: LanguageValue;
  };
  isContract?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  place?: {
    label?: {
      city: LanguageValue;
      country: LanguageValue;
    };
    producer?: {
      city: LanguageValue;
      country: LanguageValue;
    };
    editorial?: {
      city: LanguageValue;
      country: LanguageValue;
    };
  };
  remark?: {
    label?: LanguageValue;
    producer?: LanguageValue;
  };
  tale?: {
    label?: Tale;
    producer?: Tale;
  };
  barcode?: string;
  beverageType?: {
    label?: Category;
    producer?: Category;
  };
  fermentation?: {
    label?: Fermentation[];
    producer?: Fermentation[];
    editorial?: Fermentation[];
  };
  extract?: {
    label?: {
      relate: ExtractRelate;
      unit: ExtractUnit;
      value: number;
    };
    producer?: {
      relate: ExtractRelate;
      unit: ExtractUnit;
      value: number;
    };
  };
  alcohol?: {
    label?: {
      relate: AlcoholRelate;
      unit: AlcoholUnit;
      value: number;
      scope?: AlcoholScope;
    };
    producer?: {
      relate: AlcoholRelate;
      unit: AlcoholUnit;
      value: number;
      scope?: AlcoholScope;
    };
    editorial?: {
      scope: AlcoholScope;
    };
  };
  filtration?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  pasteurization?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  isAged?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  aged?: {
    label?: Aged[];
    producer?: Aged[];
    editorial?: Aged[];
  };
  style?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
    editorial?: LanguageValue[];
  };
  isDryHopped?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  dryHopped?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
    editorial?: LanguageValue[];
  };
  hopRate?: {
    label?: {
      unit: HopRateUnit;
      value: number;
    };
    producer?: {
      unit: HopRateUnit;
      value: number;
    };
  };
  expirationDate?: {
    label?: {
      value: number;
      unit: ExpirationDateUnit;
    };
    producer?: {
      value: number;
      unit: ExpirationDateUnit;
    };
  };
  ingredientsDescription?: {
    label?: {
      complete: boolean;
      language: string;
      value: string;
    };
    producer?: {
      complete: boolean;
      language: string;
      value: string;
    };
  };
  ingredientsList?: {
    label?: {
      name: LanguageValue;
      type: IngredientType;
    }[];
    producer?: {
      name: LanguageValue;
      type: IngredientType;
    }[];
  };
  smokedMalt?: {
    label?: boolean;
    producer?: boolean;
  };
  bitterness?: {
    label?: number;
    producer?: number;
  };
  sweetness?: {
    label?: number;
    producer?: number;
  };
  fullness?: {
    label?: number;
    producer?: number;
  };
  power?: {
    label?: number;
    producer?: number;
  };
  hoppyness?: {
    label?: number;
    producer?: number;
  };
  temperature?: {
    label?: {
      from: number;
      to: number;
      unit: TemperatureUnit;
    };
    producer?: {
      from: number;
      to: number;
      unit: TemperatureUnit;
    };
  };
  color?: {
    editorial?: string;
  };
  clarity?: {
    editorial?: Clarity;
  };
  container: Container;
  price?: {
    label?: Price[];
    producer?: Price[];
    editorial?: Price[];
  };
  photos?: {
    cap?: boolean;
    gallery?: number;
    outlines?: {
      gallery?: string;
    };
  };
  added: Date;
  updated?: Date;
};
