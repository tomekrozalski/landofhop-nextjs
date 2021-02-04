import { LanguageValue } from 'utils/types/common';

export type FormValues = {
  badge: string;
  name: { lang: LanguageValue; value: string }[];
  type: {
    label: string;
    value: string;
  };
  parent: {
    label: string;
    value: string;
  };
};
