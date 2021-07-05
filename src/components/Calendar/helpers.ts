import { Data } from './types';

export const getInitialArray = (endValue: number): number[] => {
  const result = [];
  for (let i = 1; i <= endValue; i++) {
    result.push(i);
  }
  return result;
};

export const checkL1 = (val: number, data: Data): boolean => {
  return data.itemsL1.find((item) => val === item) !== undefined;
};
