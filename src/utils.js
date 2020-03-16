import getOr from 'lodash/fp/getOr';

export const sortByDateDesc = (data, dateKey) => {
  return data.sort((a, b) => {
    const date1 = new Date(getOr('', dateKey, a));
    const date2 = new Date(getOr('', dateKey, b));
    if (date1 > date2) {
      return -1;
    }
    if (date1 < date2) {
      return 1;
    }
    return 0;
  });
};

export const getFormattedDate = dateStr => new Date(dateStr).toDateString();

export const loadStyles = styles => className => styles[className] || 'UNKNOWN';
