type InstitutionInput = {
  badge: string;
  name: {
    value: string;
    lang: {
      label: string;
      value: string;
    };
  }[];
  ownedBy: {
    label: string;
    value: string;
  } | null;
  website: string;
};

export type InstitutionOutput = {
  badge: string;
  name: {
    value: string;
    language: string;
  }[];
  ownedBy?: string;
  website?: string;
};

const formatValues = ({
  badge,
  name,
  ownedBy,
  website,
}: InstitutionInput): InstitutionOutput => ({
  badge,
  name: name.map(({ value, lang }) => ({
    value,
    language: lang.value,
  })),
  ...(ownedBy && { ownedBy: ownedBy.value }),
  ...(website !== 'http://www.test.com' && { website }),
});

export default formatValues;
