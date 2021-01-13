import { LanguageValue } from 'utils/types/common';

export type FormValues = {
  badge: string;
  name: { lang: LanguageValue; value: string }[];
  ownedBy: {
    label: string;
    value: string;
  } | null;
  website: string | null;
};
