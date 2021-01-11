import { LanguageValue } from 'utils/types/common';

export type FormValues = {
  badge: string;
  name: { lang: LanguageValue; value: string }[];
};
