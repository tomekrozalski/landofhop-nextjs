import { LanguageValue } from 'utils/types/common';

const translate = (values: LanguageValue[], language: string): string =>
  values.find(item => item?.language === language)?.value || values[0].value;

export default translate;
