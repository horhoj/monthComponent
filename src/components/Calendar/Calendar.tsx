import React from 'react';
import styled from 'styled-components';
import { CalendarProps } from './types';
import { getInitialArray, check } from './helpers';

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
  cursor: pointer;
`;

const BlockL2 = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? 'green' : 'gray')};
  height: 90px;
  border-radius: 4px;
  width: 10px;
  margin: 0 5px;
  cursor: pointer;
`;

const BlockL3 = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? 'black' : 'gray')};
  height: 10px;
  border-radius: 4px;
  width: 10px;
  margin: 0 5px;
  cursor: pointer;
`;

const BlockL4 = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? 'yellow' : 'gray')};
  height: 60px;
  border-radius: 4px;
  width: 10px;
  margin: 0 5px;
  cursor: pointer;
`;

const BlockDay = styled.div`
  width: 20px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const handleClkCreator =
  (level: 1 | 2 | 3 | 4, item: number) =>
  (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    const msg = `вы кликнули по ряду с номером ${level} и элементу соответствующему ${item} дню`;
    alert(msg);
  };

export const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const arr = getInitialArray(data.colDays);
  return (
    <Wrapper>
      <WrapperBlock pb={5} pt={5}>
        {arr.map((item) => (
          <BlockL1
            key={item}
            isActive={check(item, data.itemsL1)}
            onClick={handleClkCreator(1, item)}
          />
        ))}
      </WrapperBlock>
      <WrapperBlock pb={5} pt={5}>
        {arr.map((item) => (
          <BlockL2
            key={item}
            isActive={check(item, data.itemsL2)}
            onClick={handleClkCreator(2, item)}
          />
        ))}
      </WrapperBlock>
      <WrapperBlock pb={5} pt={5}>
        {arr.map((item) => (
          <BlockL3
            key={item}
            isActive={check(item, data.itemsL3)}
            onClick={handleClkCreator(3, item)}
          />
        ))}
      </WrapperBlock>
      <WrapperBlock pb={5} pt={5}>
        {arr.map((item) => (
          <BlockL4
            key={item}
            isActive={check(item, data.itemsL4)}
            onClick={handleClkCreator(4, item)}
          />
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
