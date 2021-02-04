import { IngredientType as IngredientTypeEnum } from 'utils/enums/Beverage';

type IngredientInput = {
  badge: string;
  name: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
  type: {
    label: string;
    value: IngredientTypeEnum;
  };
  parent: {
    label: string;
    type: IngredientTypeEnum;
    value: string;
  };
};

export type IngredientOutput = {
  badge: string;
  name: {
    lang: string;
    value: string;
  }[];
  type: IngredientTypeEnum;
  parent?: string;
};

const formatValues = ({
  badge,
  name,
  parent,
  type,
}: IngredientInput): IngredientOutput => ({
  badge,
  name: name.map(({ lang, value }) => ({ lang: lang.value, value })),
  type: type.value,
  ...(parent.value && { parent: parent.value }),
});

export default formatValues;
