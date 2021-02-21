import * as Yup from 'yup';

import { isValidDate } from 'dashboard/utils/helpers';
import {
  AgedType as AgedTypeEnum,
  AgedWood as AgedWoodEnum,
  Fermentation as FermentationEnum,
} from 'utils/enums/Beverage';

export default Yup.object().shape({
  badge: Yup.string()
    .min(3)
    .matches(/^[a-z\d-]+$/)
    .required(),
  // -----------
  name: Yup.array()
    .of(
      Yup.object().shape({
        lang: Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        }),
        value: Yup.string().min(1).required(),
      }),
    )
    .required()
    .min(1),
  series: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string().min(3).required(),
    }),
  ),
  brand: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .required(),
  cooperation: Yup.array().min(1).nullable(true),
  contract: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  place: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  remark: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string().min(3).required(),
    }),
  ),
  tale: Yup.array().of(
    Yup.object().shape({
      article: Yup.string(),
      language: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      lead: Yup.string().min(12).required(),
    }),
  ),
  barcode: Yup.mixed().test(
    'is-barcode',
    'incorrect barcode',
    value => value === null || value.length,
  ),
  // -----------
  fermentation: Yup.array()
    .of(Yup.mixed().oneOf(Object.values(FermentationEnum)))
    .min(1)
    .nullable(true),
  style: Yup.array().of(
    Yup.object().shape({
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string().min(3).required(),
    }),
  ),
  extract: Yup.object().shape({
    value: Yup.number().min(0).max(100).nullable(true),
    unit: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
    relate: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
  }),
  alcohol: Yup.object().shape({
    value: Yup.number().min(0).max(100).nullable(true),
    unit: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
    relate: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
    scope: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
  }),
  aged: Yup.array().of(
    Yup.object().shape({
      type: Yup.mixed().oneOf([...Object.values(AgedTypeEnum), null]),
      wood: Yup.mixed().oneOf([...Object.values(AgedWoodEnum), null]),
      time: Yup.object()
        .shape({
          unit: Yup.object()
            .shape({
              label: Yup.string().required(),
              value: Yup.string().required(),
            })
            .nullable(true),
          value: Yup.number().min(1).nullable(true),
        })
        .required(),
      previousContent: Yup.array()
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          }),
        )
        .min(1)
        .nullable(true),
    }),
  ),
  hopRate: Yup.object()
    .shape({
      value: Yup.number().min(1).max(100).nullable(true),
      unit: Yup.object()
        .shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
        .nullable(true),
    })
    .required(),
  expirationDate: Yup.object()
    .shape({
      value: Yup.number().min(1).max(500).nullable(true),
      unit: Yup.object()
        .shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
        .nullable(true),
    })
    .required(),
  // -----------
  ingredientsDescription: Yup.array().of(
    Yup.object().shape({
      language: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      value: Yup.string().min(12).required(),
      complete: Yup.boolean().required(),
    }),
  ),
  ingredientsList: Yup.array().min(1).nullable(true),
  // -----------
  bitterness: Yup.number().min(0).max(100).integer().nullable(true),
  sweetness: Yup.number().min(0).max(100).integer().nullable(true),
  fullness: Yup.number().min(0).max(100).integer().nullable(true),
  power: Yup.number().min(0).max(100).integer().nullable(true),
  hoppyness: Yup.number().min(0).max(100).integer().nullable(true),
  temperature: Yup.object()
    .shape({
      from: Yup.number().min(0).max(Yup.ref('to')).nullable(true),
      to: Yup.number().min(Yup.ref('from')).max(100).nullable(true),
      unit: Yup.object()
        .shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
        .nullable(true),
    })
    .required(),
  // -----------
  container: Yup.object().shape({
    type: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    }),
    color: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
    material: Yup.object()
      .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
      .nullable(true),
    value: Yup.number().min(1).max(5000).required(),
    unit: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    }),
    hasCapWireFlip: Yup.boolean(),
  }),
  price: Yup.array().of(
    Yup.object().shape({
      currency: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      date: Yup.mixed().test('isCorrectDate', 'wrong date value', value =>
        isValidDate(value),
      ),
      value: Yup.number().min(0.1).required(),
    }),
  ),
});
