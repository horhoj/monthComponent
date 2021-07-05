import React from 'react';
import styled from 'styled-components';
import { CalendarProps } from './types';
import { getInitialArray, check } from './helpers';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid red;
  padding: 20px;
  justify-content: center;
`;

const Block = styled.div<{ isRed: boolean }>`
  background-color: ${({ isRed }) => (isRed ? 'red' : 'gray')};
  height: 30px;
  border-radius: 4px;
  width: 10px;
  margin: 10px;
`;

export const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const arr = getInitialArray(data.colDays);
  return (
    <Wrapper>
      {arr.map((item) => (
        <Block key={item} isRed={check(item, data)} />
      ))}
    </Wrapper>
  );
};
