import { Clarity, Currency, HopRateUnit } from 'utils/enums/Beverage';

export type FormValues = {
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
  remark: { lang: Lang; value: string }[];
  // -----------
  fermentation: string[] | null;
  style: { lang: Lang; value: string }[];
  alcoholScope: {
    label: string;
    value?: AlcoholScope;
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
  // -----------
  color: string | null;
  clarity: {
    label: string;
    value: Clarity;
  } | null;
  // -----------
  price: {
    currency: {
      label: string;
      value: Currency;
    };
    date: string;
    value: number;
  }[];
  added: string | null;
  updated: string | null;
  notes: string | null;
};
