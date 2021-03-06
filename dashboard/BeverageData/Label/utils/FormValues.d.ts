import { Currency, HopRateUnit } from 'utils/enums/Beverage';

export type FormValues = {
  badge: string;
  // -----------
  name: { lang: { label: string; value: string }; value: string }[];
  series: {
    lang: { label: string; value: string };
    value: string;
  }[];
  brand: {
    label: string;
    value: string;
  };
  cooperation:
    | {
        label: string;
        value: string;
      }[]
    | null;
  cooperation:
    | {
        label: string;
        value: string;
      }[]
    | null;
  contract: {
    label: string;
    value: string;
  } | null;
  place: {
    label: string;
    value: string;
  } | null;
  remark: { lang: { label: string; value: string }; value: string }[];
  tale: {
    article: string;
    language: { label: string; value: string };
    lead: string;
  }[];
  barcode: string | null;
  // -----------
  fermentation: string[] | null;
  style: { lang: { label: string; value: string }; value: string }[];
  extract: {
    relate: {
      label: string;
      value: ExtractRelate;
    } | null;
    unit: {
      label: string;
      value: ExtractUnit;
    } | null;
    value: number | null;
  };
  alcohol: {
    relate: {
      label: string;
      value: AlcoholRelate;
    } | null;
    scope: {
      label: string;
      value: AlcoholScope | string;
    } | null;
    unit: {
      label: string;
      value: AlcoholUnit;
    } | null;
    value: number | null;
  };
  filtration: boolean | null;
  pasteurization: boolean | null;
  aged: {
    type: AgedType | null;
    wood: AgedWood | null;
    time: {
      unit: {
        label: string;
        value: AgedTimeUnit;
      };
      value: number;
    } | null;
    previousContent:
      | {
          label: string;
          value: AgedPreviousContent;
        }[]
      | null;
  }[];
  dryHopped:
    | {
        label: string;
        value: string;
      }[]
    | null;
  hopRate: {
    unit: {
      label: string;
      value: HopRateUnit;
    } | null;
    value: number | null;
  };
  expirationDate: {
    unit: {
      label: string;
      value: ExpirationDateUnit;
    } | null;
    value: number | null;
  };
  // -----------
  ingredientsDescription: {
    language: {
      label: string;
      value: string;
    };
    value: string;
    complete: boolean;
  }[];
  ingredientsList:
    | {
        label: string;
        value: string;
        type: IngredientType;
      }[]
    | null;
  smokedMalt: boolean | null;
  // -----------
  bitterness: number | null;
  sweetness: number | null;
  fullness: number | null;
  power: number | null;
  hoppyness: number | null;
  temperature: {
    from: number | null;
    to: number | null;
    unit: {
      label: string;
      value: TemperatureUnit;
    } | null;
  };
  // -----------
  container: {
    color: {
      label: string;
      value?: ContainerColor;
    };
    hasCapWireFlip: boolean;
    hasCork: boolean;
    material: {
      label: string;
      value?: ContainerMaterial;
    };
    type: {
      label: string;
      value?: ContainerType;
    };
    unit: {
      label: string;
      value?: ContainerUnit;
    };
    value: number;
  };
  price: {
    currency: {
      label: string;
      value: Currency;
    };
    date: string;
    value: number;
  }[];
};
