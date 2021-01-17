import { LanguageValue } from 'utils/types/common';

export type FormValues = {
  code: string;
  name: { lang: LanguageValue; value: string }[];
};
