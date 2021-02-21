import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';

import { convertStringToDate } from 'dashboard/utils/helpers';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';
import { FormValues as FormValuesProducer } from 'dashboard/BeverageData/Producer/utils';
import { FormValues as FormValuesEditorial } from 'dashboard/BeverageData/Editorial/utils';

type Props = {
  id: string | null;
  label: FormValuesLabel;
  producer: FormValuesProducer;
  editorial: FormValuesEditorial;
};

const beverageFormToAPI = ({ id, label, producer, editorial }: Props) => {
  const normalizeLangValue = ({
    lang,
    value,
  }: {
    lang: { label: string; value: string };
    value: string;
  }) => ({
    ...(lang.value !== 'none' && { language: lang.value }),
    value,
  });

  const normalizeTale = ({
    article,
    language,
    lead,
  }: {
    article: string;
    language: { label: string; value: string };
    lead: string;
  }) => ({
    ...(article && { article }),
    ...(language.value !== 'none' && { language: language.value }),
    lead,
  });

  console.log('-->', { id, label, producer, editorial });

  return {
    ...(id && { id }),
    badge: label.badge,
    name: label.name.map(normalizeLangValue),
    ...((label.series || producer.series) && {
      series: {
        ...(label.series && {
          label: label.series.map(normalizeLangValue),
        }),
        ...(producer.series && {
          producer: producer.series.map(normalizeLangValue),
        }),
      },
    }),
    brand: label.brand.value,
    ...((label.cooperation ||
      producer.cooperation ||
      editorial.cooperation) && {
      cooperation: {
        ...(label.cooperation && {
          label: label.cooperation.map(({ value }) => value),
        }),
        ...(producer.cooperation && {
          producer: producer.cooperation.map(({ value }) => value),
        }),
        ...(editorial.cooperation && {
          editorial: editorial.cooperation.map(({ value }) => value),
        }),
      },
    }),
    ...(((label.contract && label.contract.value !== '--') ||
      (producer.contract && producer.contract.value !== '--') ||
      (editorial.contract && editorial.contract.value !== '--')) && {
      contract: {
        ...(label.contract && {
          label: label.contract.value,
        }),
        ...(producer.contract && {
          producer: producer.contract.value,
        }),
        ...(editorial.contract && {
          editorial: editorial.contract.value,
        }),
      },
    }),
    ...((label.contract?.value === '--' ||
      producer.contract?.value === '--' ||
      editorial.contract?.value === '--') && {
      isContract: {
        ...(label.contract?.value === '--' && { label: true }),
        ...(producer.contract?.value === '--' && { producer: true }),
        ...(editorial.contract?.value === '--' && { editorial: true }),
      },
    }),
    ...((label.place || producer.place || editorial.place) && {
      place: {
        ...(label.place && {
          label: label.place.value,
        }),
        ...(producer.place && {
          producer: producer.place.value,
        }),
        ...(editorial.place && {
          editorial: editorial.place.value,
        }),
      },
    }),
    ...((label.remark || producer.remark || editorial.remark) && {
      remark: {
        ...(label.remark && {
          label: label.remark.map(normalizeLangValue),
        }),
        ...(producer.remark && {
          producer: producer.remark.map(normalizeLangValue),
        }),
        ...(editorial.remark && {
          editorial: editorial.remark.map(normalizeLangValue),
        }),
      },
    }),
    ...((label.tale || producer.tale) && {
      tale: {
        ...(label.tale && {
          label: label.tale.map(normalizeTale),
        }),
        ...(producer.tale && {
          producer: producer.tale.map(normalizeTale),
        }),
      },
    }),
    ...(label.barcode && { barcode: label.barcode }),
    // -----------
    ...((label.fermentation ||
      producer.fermentation ||
      editorial.fermentation) && {
      fermentation: {
        ...(label.fermentation && {
          label: label.fermentation,
        }),
        ...(producer.fermentation && {
          producer: producer.fermentation,
        }),
        ...(editorial.fermentation && {
          editorial: editorial.fermentation,
        }),
      },
    }),
    ...((label.style || producer.style || editorial.style) && {
      style: {
        ...(label.style && {
          label: label.style.map(normalizeLangValue),
        }),
        ...(producer.style && {
          producer: producer.style.map(normalizeLangValue),
        }),
        ...(editorial.style && {
          editorial: editorial.style.map(normalizeLangValue),
        }),
      },
    }),
    ...((label.extract.value || producer.extract.value) && {
      extract: {
        ...(label.extract.value && {
          label: {
            relate: label.extract.relate.value,
            unit: label.extract.unit.value,
            value: label.extract.value,
          },
        }),
        ...(producer.extract.value && {
          producer: {
            relate: producer.extract.relate.value,
            unit: producer.extract.unit.value,
            value: producer.extract.value,
          },
        }),
      },
    }),
    ...((label.alcohol.value ||
      producer.alcohol.value ||
      editorial.alcoholScope) && {
      alcohol: {
        ...(label.alcohol.value && {
          label: {
            relate: label.alcohol.relate.value,
            unit: label.alcohol.unit.value,
            value: label.alcohol.value,
            ...(label.alcohol.scope.value !== '-' && {
              scope: label.alcohol.scope.value,
            }),
          },
        }),
        ...(producer.alcohol.value && {
          producer: {
            relate: producer.alcohol.relate.value,
            unit: producer.alcohol.unit.value,
            value: producer.alcohol.value,
            ...(producer.alcohol.scope.value !== '-' && {
              scope: producer.alcohol.scope.value,
            }),
          },
        }),
        ...(editorial.alcoholScope &&
          editorial.alcoholScope.value !== '-' && {
            editorial: {
              scope: editorial.alcoholScope.value,
            },
          }),
      },
    }),
    ...((isBoolean(label.filtration) ||
      isBoolean(producer.filtration) ||
      isBoolean(editorial.filtration)) && {
      filtration: {
        ...(isBoolean(label.filtration) && {
          label: label.filtration,
        }),
        ...(isBoolean(producer.filtration) && {
          producer: producer.filtration,
        }),
        ...(isBoolean(editorial.filtration) && {
          editorial: editorial.filtration,
        }),
      },
    }),
    ...((isBoolean(label.pasteurization) ||
      isBoolean(producer.pasteurization) ||
      isBoolean(editorial.pasteurization)) && {
      pasteurization: {
        ...(isBoolean(label.pasteurization) && {
          label: label.pasteurization,
        }),
        ...(isBoolean(producer.pasteurization) && {
          producer: producer.pasteurization,
        }),
        ...(isBoolean(editorial.pasteurization) && {
          editorial: editorial.pasteurization,
        }),
      },
    }),
    ...((label.aged || producer.aged || editorial.aged) && {
      aged: {
        ...(label.aged && {
          label: label.aged.map(({ type, wood, time, previousContent }) => ({
            ...(type && { type }),
            ...(wood && { wood }),
            ...(time.value && {
              time: {
                unit: time.unit.value,
                value: time.value,
              },
            }),
            ...(previousContent && {
              previousContent: previousContent.map(({ value }) => value),
            }),
          })),
        }),
        ...(producer.aged && {
          producer: producer.aged.map(
            ({ type, wood, time, previousContent }) => ({
              ...(type && { type }),
              ...(wood && { wood }),
              ...(time.value && {
                time: {
                  unit: time.unit.value,
                  value: time.value,
                },
              }),
              ...(previousContent && {
                previousContent: previousContent.map(({ value }) => value),
              }),
            }),
          ),
        }),
        ...(editorial.aged && {
          editorial: editorial.aged.map(
            ({ type, wood, time, previousContent }) => ({
              ...(type && { type }),
              ...(wood && { wood }),
              ...(time.value && {
                time: {
                  unit: time.unit.value,
                  value: time.value,
                },
              }),
              ...(previousContent && {
                previousContent: previousContent.map(({ value }) => value),
              }),
            }),
          ),
        }),
      },
    }),
    ...((label.dryHopped?.length ||
      producer.dryHopped?.length ||
      editorial.dryHopped?.length) && {
      dryHopped: {
        ...(label.dryHopped?.length && {
          label: label.dryHopped.map(({ value }) => value),
        }),
        ...(producer.dryHopped?.length && {
          producer: producer.dryHopped.map(({ value }) => value),
        }),
        ...(editorial.dryHopped?.length && {
          editorial: editorial.dryHopped.map(({ value }) => value),
        }),
      },
    }),
    ...(((label.dryHopped && !label.dryHopped?.length) ||
      (producer.dryHopped && !producer.dryHopped?.length) ||
      (editorial.dryHopped && !editorial.dryHopped?.length)) && {
      isDryHopped: {
        ...(label.dryHopped &&
          !label.dryHopped?.length && {
            label: true,
          }),
        ...(producer.dryHopped &&
          !producer.dryHopped?.length && {
            producer: true,
          }),
        ...(editorial.dryHopped &&
          !editorial.dryHopped?.length && {
            editorial: true,
          }),
      },
    }),
    ...((label.hopRate.value || producer.hopRate.value) && {
      hopRate: {
        ...(label.hopRate.value && {
          label: {
            unit: label.hopRate.unit.value,
            value: label.hopRate.value,
          },
        }),
        ...(producer.hopRate.value && {
          producer: {
            unit: producer.hopRate.unit.value,
            value: producer.hopRate.value,
          },
        }),
      },
    }),
    ...((label.expirationDate.value || producer.expirationDate.value) && {
      expirationDate: {
        ...(label.expirationDate.value && {
          label: {
            unit: label.expirationDate.unit.value,
            value: label.expirationDate.value,
          },
        }),
        ...(producer.expirationDate.value && {
          producer: {
            unit: producer.expirationDate.unit.value,
            value: producer.expirationDate.value,
          },
        }),
      },
    }),
    // -----------
    ...((label.ingredientsDescription || producer.ingredientsDescription) && {
      ingredientsDescription: {
        ...(label.ingredientsDescription && {
          label: label.ingredientsDescription.map(
            ({ language, value, complete }) => ({
              ...(language.value !== 'none' && { language: language.value }),
              value,
              complete,
            }),
          ),
        }),
        ...(producer.ingredientsDescription && {
          producer: producer.ingredientsDescription.map(
            ({ language, value, complete }) => ({
              ...(language.value !== 'none' && { language: language.value }),
              value,
              complete,
            }),
          ),
        }),
      },
    }),
    ...((label.ingredientsList?.length || producer.ingredientsList?.length) && {
      ingredientsList: {
        ...(label.ingredientsList?.length && {
          label: label.ingredientsList.map(({ value }) => value),
        }),
        ...(producer.ingredientsList?.length && {
          producer: producer.ingredientsList.map(({ value }) => value),
        }),
      },
    }),
    ...((isBoolean(label.smokedMalt) || isBoolean(producer.smokedMalt)) && {
      smokedMalt: {
        ...(isBoolean(label.smokedMalt) && {
          label: label.smokedMalt,
        }),
        ...(isBoolean(producer.smokedMalt) && {
          producer: producer.smokedMalt,
        }),
      },
    }),
    // -----------
    ...((isNumber(label.bitterness) || isNumber(producer.bitterness)) && {
      bitterness: {
        ...(isNumber(label.bitterness) && {
          label: label.bitterness,
        }),
        ...(isNumber(producer.bitterness) && {
          producer: producer.bitterness,
        }),
      },
    }),
    ...((isNumber(label.sweetness) || isNumber(producer.sweetness)) && {
      sweetness: {
        ...(isNumber(label.sweetness) && {
          label: label.sweetness,
        }),
        ...(isNumber(producer.sweetness) && {
          producer: producer.sweetness,
        }),
      },
    }),
    ...((isNumber(label.fullness) || isNumber(producer.fullness)) && {
      fullness: {
        ...(isNumber(label.fullness) && {
          label: label.fullness,
        }),
        ...(isNumber(producer.fullness) && {
          producer: producer.fullness,
        }),
      },
    }),
    ...((isNumber(label.power) || isNumber(producer.power)) && {
      power: {
        ...(isNumber(label.power) && {
          label: label.power,
        }),
        ...(isNumber(producer.power) && {
          producer: producer.power,
        }),
      },
    }),
    ...((isNumber(label.hoppyness) || isNumber(producer.hoppyness)) && {
      hoppyness: {
        ...(isNumber(label.hoppyness) && {
          label: label.hoppyness,
        }),
        ...(isNumber(producer.hoppyness) && {
          producer: producer.hoppyness,
        }),
      },
    }),
    ...((label.temperature.from || producer.temperature.from) && {
      temperature: {
        ...(label.temperature.from && {
          label: {
            from: label.temperature.from,
            to: label.temperature.to,
            unit: label.temperature.unit.value,
          },
        }),
        ...(producer.temperature.from && {
          producer: {
            from: producer.temperature.from,
            to: producer.temperature.to,
            unit: producer.temperature.unit.value,
          },
        }),
      },
    }),
    ...(editorial.color && {
      color: {
        editorial: editorial.color,
      },
    }),
    ...(editorial.clarity && {
      clarity: {
        editorial: editorial.clarity.value,
      },
    }),
    // -----------
    added: convertStringToDate(editorial.added),
    ...(editorial.updated && {
      updated: convertStringToDate(editorial.updated),
    }),
    container: {
      color: label.container.color.value,
      material: label.container.material.value,
      type: label.container.type.value,
      unit: label.container.unit.value,
      value: label.container.value,
      ...(label.container.hasCapWireFlip && { hasCapWireFlip: true }),
      ...(label.container.hasCork && { hasCork: true }),
    },
    ...((label.price || producer.price || editorial.price) && {
      price: {
        ...(label.price && {
          label: label.price.map(({ currency, date, value }) => {
            const [day, month, year] = date.split('.');

            return {
              currency: currency.value,
              date: new Date(+year, +month - 1, +day),
              value,
            };
          }),
        }),
        ...(producer.price && {
          producer: producer.price.map(({ currency, date, value }) => {
            const [day, month, year] = date.split('.');

            return {
              currency: currency.value,
              date: new Date(+year, +month - 1, +day),
              value,
            };
          }),
        }),
        ...(editorial.price && {
          editorial: editorial.price.map(({ currency, date, value }) => {
            const [day, month, year] = date.split('.');

            return {
              currency: currency.value,
              date: new Date(+year, +month - 1, +day),
              value,
            };
          }),
        }),
      },
    }),
    ...(editorial.notes && { notes: editorial.notes }),
  };
};

export default beverageFormToAPI;
