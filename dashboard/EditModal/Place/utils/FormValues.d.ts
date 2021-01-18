import { LanguageValue } from 'utils/types/common';

export type FormValues = {
  city: { lang: Lang; value: string }[];
  country:
    | {
        label: string;
        value: string;
      }
    | string;
  institution:
    | {
        label: string;
        value: string;
      }
    | string;
  longitude: number | null;
  latitude: number | null;
};
