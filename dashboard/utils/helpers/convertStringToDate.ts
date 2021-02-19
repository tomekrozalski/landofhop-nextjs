import { format, isValid } from 'date-fns';

const convertStringToDate = (value: string | null) => {
  const date = value || format(new Date(), 'dd.MM.yyyy, HH:mm:ss');
  const group = date.match(/^(\d\d).(\d\d).(\d\d\d\d), (\d\d):(\d\d):(\d\d)$/);

  if (!group) {
    return false;
  }

  const [day, month, year, hour, minute, second] = group.slice(1);
  const formattedString = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  if (!isValid(new Date(formattedString))) {
    return false;
  }

  return new Date(formattedString);
};

export default convertStringToDate;
