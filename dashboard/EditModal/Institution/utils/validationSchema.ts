import * as Yup from 'yup';

export default Yup.object().shape({
  badge: Yup.string()
    .min(3)
    .matches(/^[a-z\d-]+$/)
    .required(),
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
  ownedBy: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable(true),
  website: Yup.string()
    .transform(v => (v === null ? 'http://www.test.com' : v))
    .url()
    .required(),
});
