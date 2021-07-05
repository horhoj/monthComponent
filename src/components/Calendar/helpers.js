export const getInitialArray = (endValue) => {
  const result = [];
  for (let i = 1; i <= endValue; i++) {
    result.push(i);
  }
  return result;
};

export const check = (val, arr) => {
  return arr.find((item) => val === item) !== undefined;
};
