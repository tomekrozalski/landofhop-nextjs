import * as Yup from 'yup';

import { isValidDate, isValidDateTime } from 'dashboard/utils/helpers';
import {
  AgedType as AgedTypeEnum,
  AgedWood as AgedWoodEnum,
  AlcoholScope as AlcoholScopeEnum,
  Clarity as ClarityEnum,
  Fermentation as FermentationEnum,
} from 'utils/enums/Beverage';

export default Yup.object().shape({
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
  alcoholScope: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.mixed().oneOf(Object.values(AlcoholScopeEnum)).required(),
    })
    .nullable(true),
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
  // -----------
  color: Yup.mixed().test(
    'is-color',
    'incorrect color',
    value => value === null || value.match(/^#[0-9abcdef]{6}$/),
  ),
  clarity: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.mixed().oneOf(Object.values(ClarityEnum)).required(),
    })
    .nullable(true),
  // -----------
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
  added: Yup.mixed().test('isCorrectDate', 'wrong datetime value', value =>
    isValidDateTime(value, { nullable: true }),
  ),
  updated: Yup.mixed().test('isCorrectDate', 'wrong datetime value', value =>
    isValidDateTime(value, { nullable: true }),
  ),
  notes: Yup.string().min(3).nullable(true),
});
