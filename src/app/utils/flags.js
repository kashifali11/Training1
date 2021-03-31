export const isEmpty = (data) => {
  if (data.length !== 0 && data !== undefined) {
    return false;
  } else return true;
};

export const isUndefined = (data) => {
  if (data === undefined) {
    return true;
  } else return false;
};
