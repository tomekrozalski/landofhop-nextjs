import { LanguageValue } from 'utils/types/common';

export type Institution = {
  badge: string;
  id: string;
  name: LanguageValue[];
  shortId: string;
  website?: string;
  consortium?: LanguageValue[];
};
