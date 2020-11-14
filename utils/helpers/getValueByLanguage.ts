import { LanguageValue } from 'utils/types/common';

const getValueByLanguage = (
  values: LanguageValue[],
  language: string,
): LanguageValue =>
  values.find(item => item?.language === language) || values[0];

export default getValueByLanguage;
