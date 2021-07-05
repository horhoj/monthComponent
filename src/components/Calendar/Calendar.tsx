import React from 'react';
import styled from 'styled-components';
import { CalendarProps } from './types';
import { getInitialArray, checkL1 } from './helpers';

const Wrapper = styled.div`
  border: 1px solid red;
  border-radius: 5px;
  width: 700px;
`;

const WrapperBlock = styled.div<{ pt: number; pb: number }>`
  display: flex;
  padding-top: ${({ pt }) => pt}px;
  padding-bottom: ${({ pb }) => pb}px;
  justify-content: center;
`;

const BlockL1 = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? 'red' : 'gray')};
  height: 30px;
  border-radius: 4px;
  width: 10px;
  margin: 0 5px;
`;

const BlockDay = styled.div`
  width: 20px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const arr = getInitialArray(data.colDays);
  return (
    <Wrapper>
      <WrapperBlock pb={5} pt={5}>
        {arr.map((item) => (
          <BlockL1 key={item} isActive={checkL1(item, data)} />
        ))}
      </WrapperBlock>
      <WrapperBlock pb={5} pt={5}>
        {arr.map((item) => (
          <BlockDay key={item}>{item}</BlockDay>
        ))}
      </WrapperBlock>
    </Wrapper>
  );
};
