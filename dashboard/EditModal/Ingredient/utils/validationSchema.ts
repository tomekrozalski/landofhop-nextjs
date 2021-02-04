import * as Yup from 'yup';

const validationSchema = (codes: string[]) =>
  Yup.object().shape({
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
    type: Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    }),
  });

export default validationSchema;
