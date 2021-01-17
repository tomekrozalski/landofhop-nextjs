type LanguageInput = {
  code: string;
  name: {
    value: string;
    lang: {
      label: string;
      value: string;
    };
  }[];
};

export type LanguageOutput = {
  code: string;
  name: {
    value: string;
    language: string;
  }[];
};

const formatValues = ({ code, name }: LanguageInput): LanguageOutput => ({
  code,
  name: name.map(({ lang, value }) => ({ language: lang.value, value })),
});

export default formatValues;
