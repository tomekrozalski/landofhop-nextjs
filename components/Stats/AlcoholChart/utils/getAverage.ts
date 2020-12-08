import { AlcoholChartBar } from 'utils/types/Beverage';

const getAverage = (data: AlcoholChartBar[]): number => {
  const summed = data
    .filter(({ beverages }) => beverages)
    .reduce(
      (acc, { beverages, value }) => ({
        total: beverages * value + acc.total,
        length: beverages + acc.length,
      }),
      {
        total: 0,
        length: 0,
      },
    );

  return +(summed.total / summed.length).toPrecision(2);
};

export default getAverage;
