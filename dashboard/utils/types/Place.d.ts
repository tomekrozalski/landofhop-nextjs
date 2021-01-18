import { LanguageValue } from 'utils/types/common';

export type Place = {
  city: LanguageValue[];
  coordinates?: number[];
  country: LanguageValue[];
  id: string;
  institution: LanguageValue[];
};
