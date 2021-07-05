import React from 'react';
import styled from 'styled-components';
import { Calendar } from './components/Calendar';
import { Data } from './components/Calendar/types';

const Container = styled.div`
  margin: 30px auto 0;
  width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const initialData: Data = {
  colDays: 31,
  itemsL1: [1, 2, 3, 15, 16],
};

export const App: React.FC = () => {
  return (
    <Container>
      <Calendar data={initialData} />
    </Container>
  );
};
