import { isAfter, isValid, differenceInDays } from 'date-fns';

type OptionsProps = {
  nullable?: boolean;
};

const isValidDateTime = (value: string, options: OptionsProps = {}) => {
  if (options.nullable && value === null) {
    return true;
  }

  const group = value.match(/^(\d\d).(\d\d).(\d\d\d\d), (\d\d):(\d\d):(\d\d)$/);

  if (!group) {
    return false;
  }

  const [day, month, year, hour, minute, second] = group.slice(1);
  const formattedString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  if (!isValid(new Date(formattedString))) {
    return false;
  }

  const isAfterAppBorn = isAfter(
    new Date(formattedString),
    new Date('2017-06-19'),
  );

  const isBeforeTomorrow =
    differenceInDays(new Date(formattedString), new Date()) < 1;

  return isAfterAppBorn && isBeforeTomorrow;
};

export default isValidDateTime;
