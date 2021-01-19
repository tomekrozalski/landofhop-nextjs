import * as Yup from 'yup';

const validationSchema = (codes: string[]) =>
  Yup.object().shape({
    code: Yup.string()
      .matches(/^[a-z]{2}$/)
      .test(
        'is-taken',
        'the code is already taken',
        value => !codes.includes(value),
      )
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
  });

export default validationSchema;
