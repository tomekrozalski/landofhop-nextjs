import { LanguageValue } from 'utils/types/common';
// import {
//   AgedPreviousContent,
//   AgedTimeUnit,
//   AgedType,
//   AgedWood,
//   AlcoholRelate,
//   AlcoholScope,
//   AlcoholUnit,
//   BeverageType,
//   ContainerColor,
//   ContainerMaterial,
//   ContainerType,
//   ContainerUnit,
//   Currency,
//   ExpirationDateUnit,
//   ExtractRelate,
//   ExtractUnit,
//   HopRateUnit,
//   IngredientType,
//   TemperatureUnit,
// } from 'utils/enums/Beverage';

export type FormValues = {
  badge: string;
  // -----------
  name: { lang: LanguageValue; value: string }[];
  series: {
    lang: LanguageValue;
    value: string;
  }[];
  // brand: {
  //   label: string;
  //   value: string;
  // };
  // cooperation:
  //   | {
  //       label: string;
  //       value: string;
  //     }[]
  //   | null;
  // contract: {
  //   label: string;
  //   value: string;
  // } | null;
  // place: {
  //   label: string;
  //   value: string;
  // } | null;
  // remark: { lang: Lang; value: string }[];
  // tale: {
  //   article: string;
  //   lang: Lang;
  //   lead: string;
  // }[];
  // barcode: string | null;
  // -----------
  // beverageType: BeverageType | null;
  // fermentation: string[] | null;
  // style: { lang: Lang; value: string }[];
  // extract: {
  //   relate: {
  //     label: string;
  //     value: ExtractRelate;
  //   };
  //   unit: {
  //     label: string;
  //     value: ExtractUnit;
  //   };
  //   value: number;
  // } | null;
  // alcohol: {
  //   relate: {
  //     label: string;
  //     value: AlcoholRelate;
  //   };
  //   scope: {
  //     label: string;
  //     value: AlcoholScope | string;
  //   };
  //   unit: {
  //     label: string;
  //     value: AlcoholUnit;
  //   };
  //   value: number;
  // } | null;
  // filtration: boolean | null;
  // pasteurization: boolean | null;
  // aged: {
  //   type: AgedType | null;
  //   wood: AgedWood | null;
  //   time: {
  //     unit: {
  //       label: string;
  //       value: AgedTimeUnit;
  //     };
  //     value: number;
  //   } | null;
  //   previousContent:
  //     | {
  //         label: string;
  //         value: AgedPreviousContent;
  //       }[]
  //     | null;
  // }[];
  // dryHopped:
  //   | {
  //       label: string;
  //       value: string;
  //     }[]
  //   | null;
  // hopRate: {
  //   unit: {
  //     label: string;
  //     value: HopRateUnit;
  //   };
  //   value: number;
  // } | null;
  // expirationDate: {
  //   unit: {
  //     label: string;
  //     value: ExpirationDateUnit;
  //   };
  //   value: number;
  // } | null;
  // // -----------
  // ingredientsDescription: {
  //   language: {
  //     label: string;
  //     value: string;
  //   };
  //   value: string;
  //   complete: boolean;
  // }[];
  // ingredientsList:
  //   | {
  //       label: string;
  //       value: string;
  //       type: IngredientType;
  //     }[]
  //   | null;
  // smokedMalt: boolean | null;
  // -----------
  // bitterness: number | null;
  // sweetness: number | null;
  // fullness: number | null;
  // power: number | null;
  // hoppyness: number | null;
  // temperature: {
  //   from: number;
  //   to: number;
  //   unit: {
  //     label: string;
  //     value: TemperatureUnit;
  //   };
  // } | null;
  // -----------
  // container: {
  //   color: {
  //     label: string;
  //     value: ContainerColor;
  //   };
  //   hasCapWireFlip: boolean;
  //   hasCork: boolean;
  //   material: {
  //     label: string;
  //     value: ContainerMaterial;
  //   };
  //   type: {
  //     label: string;
  //     value: ContainerType;
  //   };
  //   unit: {
  //     label: string;
  //     value: ContainerUnit;
  //   };
  //   value: number;
  // };
  // price: {
  //   currency: {
  //     label: string;
  //     value: Currency;
  //   };
  //   date: string;
  //   value: number;
  // }[];
};
