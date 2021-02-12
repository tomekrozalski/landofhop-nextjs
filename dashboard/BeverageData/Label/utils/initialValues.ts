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
  dryHopped: null,
  hopRate: {
    value: null,
    unit: null,
  },
  expirationDate: {
    value: null,
    unit: null,
  },
  // -----------
  ingredientsDescription: [],
  ingredientsList: null,
  smokedMalt: null,
  // -----------
  bitterness: null,
  sweetness: null,
  fullness: null,
  power: null,
  hoppyness: null,
  temperature: {
    from: null,
    to: null,
    unit: null,
  },
  // -----------
  container: {
    color: { label: '' },
    material: { label: '' },
    unit: { label: '' },
    type: { label: '' },
    value: 0,
    hasCork: false,
    hasCapWireFlip: false,
  },
  // price: [],
};

export default initialValues;
