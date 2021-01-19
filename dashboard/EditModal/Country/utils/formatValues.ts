type CountryInput = {
  code: string;
  name: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
};

export type CountryOutput = {
  code: string;
  name: {
    value: string;
    language: string;
  }[];
};

const formatValues = ({ code, name }: CountryInput): CountryOutput => ({
  code,
  name: name.map(({ lang, value }) => ({ language: lang.value, value })),
});

export default formatValues;
