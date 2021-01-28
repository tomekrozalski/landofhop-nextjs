// import {
//   ContainerColor,
//   ContainerMaterial,
//   ContainerUnit,
// } from 'utils/enums/Beverage';

const initialValues = {
  badge: '',
  // -----------
  name: [{ lang: { value: '' }, value: '' }],
  series: [],
  brand: {
    label: '',
    value: '',
  },
  cooperation: null,
  contract: null,
  place: null,
  remark: [],
  tale: [],
  barcode: null,
  // -----------
  fermentation: null,
  style: [],
  extract: {
    value: null,
    unit: null,
    relate: null,
  },
  alcohol: {
    value: null,
    unit: null,
    relate: null,
    scope: null,
  },
  filtration: null,
  pasteurization: null,
  aged: [],
  // dryHopped: null,
  // hopRate: null,
  // expirationDate: null,
  // -----------
  // ingredientsDescription: [],
  // ingredientsList: null,
  // smokedMalt: null,
  // -----------
  // bitterness: null,
  // sweetness: null,
  // fullness: null,
  // power: null,
  // hoppyness: null,
  // temperature: null,
  // -----------
  // container: {
  //   color: { label: '', value: ContainerColor.brown },
  //   material: { label: '', value: ContainerMaterial.glass },
  //   unit: { label: '', value: ContainerUnit.ml },
  //   type: { label: '', value: undefined },
  //   value: 0,
  //   hasCork: false,
  //   hasCapWireFlip: false,
  // },
  // price: [],
};

export default initialValues;
