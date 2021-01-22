import * as Yup from 'yup';

// import { isValidDate } from 'dashboard/utils/helpers';
import { Fermentation as FermentationEnum } from 'utils/enums/Beverage';

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
      lang: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      }),
      lead: Yup.string().min(12).required(),
    }),
  ),
  barcode: Yup.string()
    // null should be treated as correct option
    .transform(v => (v === null ? 'abdef' : v))
    .min(5)
    .required(),
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
  extractValue: Yup.number().min(0).max(100).nullable(true),
  extractUnit: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  extractRelate: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  // alcohol: Yup.object()
  //   .shape({
  //     value: Yup.number()
  //       .min(0)
  //       .max(100)
  //       .required(),
  //     unit: Yup.object().shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     }),
  //     relate: Yup.object().shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     }),
  //     scope: Yup.object().shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     }),
  //   })
  //   .nullable(true),
  // aged: Yup.array().of(
  //   Yup.object().shape({
  //     type: Yup.string()
  //       // null should be treated as correct option
  //       .transform(v => (v === null ? 'ok' : v))
  //       .required(),
  //     wood: Yup.string()
  //       // null should be treated as correct option
  //       .transform(v => (v === null ? 'ok' : v))
  //       .required(),
  //     time: Yup.object()
  //       .shape({
  //         unit: Yup.object().shape({
  //           label: Yup.string().required(),
  //           value: Yup.string().required(),
  //         }),
  //         value: Yup.number()
  //           .min(1)
  //           .required(),
  //       })
  //       .nullable(true),
  //     previousContent: Yup.array()
  //       .of(
  //         Yup.object().shape({
  //           label: Yup.string().required(),
  //           value: Yup.string().required(),
  //         }),
  //       )
  //       .min(1)
  //       .nullable(true),
  //   }),
  // ),
  // expirationDate: Yup.object()
  //   .shape({
  //     value: Yup.number()
  //       .min(1)
  //       .max(500)
  //       .required(),
  //     unit: Yup.object().shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     }),
  //   })
  //   .nullable(true),
  // // -----------
  // ingredientsDescription: Yup.array().of(
  //   Yup.object().shape({
  //     language: Yup.object().shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     }),
  //     value: Yup.string()
  //       .min(12)
  //       .required(),
  //     complete: Yup.boolean().required(),
  //   }),
  // ),
  // ingredientsList: Yup.array()
  //   .min(1)
  //   .nullable(true),
  // -----------
  // bitterness: Yup.number()
  //   .min(0)
  //   .max(100)
  //   .nullable(true),
  // sweetness: Yup.number()
  //   .min(0)
  //   .max(100)
  //   .nullable(true),
  // fullness: Yup.number()
  //   .min(0)
  //   .max(100)
  //   .nullable(true),
  // power: Yup.number()
  //   .min(0)
  //   .max(100)
  //   .nullable(true),
  // hoppyness: Yup.number()
  //   .min(0)
  //   .max(100)
  //   .nullable(true),
  // temperature: Yup.object()
  //   .shape({
  //     from: Yup.number()
  //       .min(0)
  //       .max(Yup.ref('to'))
  //       .required(),
  //     to: Yup.number()
  //       .min(Yup.ref('from'))
  //       .max(100)
  //       .required(),
  //     unit: Yup.object().shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     }),
  //   })
  //   .nullable(true),
  // // -----------
  // container: Yup.object().shape({
  //   type: Yup.object().shape({
  //     label: Yup.string().required(),
  //     value: Yup.string().required(),
  //   }),
  //   color: Yup.object()
  //     .shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     })
  //     .nullable(true),
  //   material: Yup.object()
  //     .shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     })
  //     .nullable(true),
  //   value: Yup.number()
  //     .min(1)
  //     .max(5000)
  //     .required(),
  //   unit: Yup.object().shape({
  //     label: Yup.string().required(),
  //     value: Yup.string().required(),
  //   }),
  //   hasCapWireFlip: Yup.boolean(),
  // }),
  // price: Yup.array().of(
  //   Yup.object().shape({
  //     currency: Yup.object().shape({
  //       label: Yup.string().required(),
  //       value: Yup.string().required(),
  //     }),
  //     date: Yup.mixed().test('isCorrectDate', 'wrong date value', value =>
  //       isValidDate(value),
  //     ),
  //     value: Yup.number()
  //       .min(0)
  //       .required(),
  //   }),
  // ),
});
