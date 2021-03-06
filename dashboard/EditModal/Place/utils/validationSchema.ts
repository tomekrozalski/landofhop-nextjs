import * as Yup from 'yup';
import isNull from 'lodash/isNull';
import isNumber from 'lodash/isNumber';

export default Yup.object().shape({
  city: Yup.array()
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
  country: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  institution: Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
  longitude: Yup.mixed().test(
    'is-longitude',
    'is not correct longitude',
    function test(input) {
      const value = input === '' ? NaN : +input;
      return (
        (isNull(input) && isNull(this.parent.latitude)) ||
        (isNumber(value) &&
          !isNull(this.parent.latitude) &&
          value >= -180 &&
          value <= 180)
      );
    },
  ),
  latitude: Yup.mixed().test(
    'is-latitude',
    'is not correct latitude',
    function test(input) {
      const value = input === '' ? NaN : +input;
      return (
        (isNull(input) && isNull(this.parent.longitude)) ||
        (isNumber(value) &&
          !isNull(this.parent.longitude) &&
          value >= -180 &&
          value <= 180)
      );
    },
  ),
});
