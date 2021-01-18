import isNull from 'lodash/isNull';

type PlaceInput = {
  city: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
  country: {
    label: string;
    value: string;
  };
  institution: {
    label: string;
    value: string;
  };
  latitude: number | null;
  longitude: number | null;
};

export type PlaceOutput = {
  city: {
    language: string;
    value: string;
  }[];
  country: string;
  institution: string;
  latitude?: number;
  longitude?: number;
};

const formatValues = ({
  city,
  country,
  institution,
  latitude,
  longitude,
}: PlaceInput): PlaceOutput => ({
  city: city.map(({ lang, value }) => ({ language: lang.value, value })),
  country: country.value,
  institution: institution.value,
  ...(!isNull(latitude) && { latitude: +latitude }),
  ...(!isNull(longitude) && { longitude: +longitude }),
});

export default formatValues;
