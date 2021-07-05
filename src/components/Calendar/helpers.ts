import { Data } from './types';

export const getInitialArray = (endValue: number): number[] => {
  const result = [];
  for (let i = 1; i <= endValue; i++) {
    result.push(i);
  }
  return result;
};

export const check = (val: number, data: Data): boolean => {
  return data.items.find((item) => val === item) !== undefined;
};
