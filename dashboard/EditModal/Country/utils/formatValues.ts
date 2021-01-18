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
    lang: string;
    value: string;
  }[];
};

const formatValues = ({ code, name }: CountryInput): CountryOutput => ({
  code,
  name: name.map(({ lang, value }) => ({ lang: lang.value, value })),
});

export default formatValues;
