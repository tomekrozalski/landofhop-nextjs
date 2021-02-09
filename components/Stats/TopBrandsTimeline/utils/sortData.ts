import { TopBrandsTimelineBar } from 'utils/types/Beverage';

const sortData = (data: TopBrandsTimelineBar[]) => {
  const checkTrend = (a, b, monthIndex) => {
    /*
     * check a and b in previous month
     */
    const values = data[monthIndex].brands
      .filter(({ id }) => [a.id, b.id].includes(id))
      .reduce((acc, { id, ...rest }) => ({ ...acc, [id]: rest }), {});

    /*
     * if a is bigger, it will return 1
     * if a is lower , it will return -1
     * if a quals b, it will return 0
     */
    const sign = Math.sign(values[a.id].amount - values[b.id].amount);

    /*
     * if a was bigger than b, move it upfront: 1
     * if a was lower than b, move it backward: -1
     * so if a was lower than b and now a quals b
     * the trend is upward - so we should show it before
     * as higher, so move it backward: -1
     */

    switch (sign) {
      case 1:
        return 1;
      case -1:
        return -1;
      default:
        return checkTrend(a, b, monthIndex - 1);
    }
  };

  const monthIndex = data.length - 1;

  return data[monthIndex].brands.sort((a, b) => {
    /*
     * if a is bigger, it will return 1
     * if a is lower , it will return -1
     * if a quals b, it will return 0
     */
    const sign = Math.sign(a.amount - b.amount);

    /*
     * sort the array from the highest to lowest
     * so if a is bigger than b, move it backward: -1
     * if a is lower than b, move it upfront: 1
     * else check a and b trend
     */

    switch (sign) {
      case 1:
        return -1;
      case -1:
        return 1;
      default:
        return checkTrend(a, b, monthIndex - 1);
    }
  });
};

export default sortData;
