import React from 'react';
import styled from 'styled-components';
import { Calendar } from './components/Calendar';
import { Data } from './components/Calendar/types';

const Container = styled.div`
  margin: 0 auto;
  width: 1024px;
`;

const initialData: Data = {
  colDays: 31,
  items: [1, 2, 3, 15, 16],
};

export const App: React.FC = () => {
  return (
    <Container>
      <Calendar data={initialData} />
    </Container>
  );
};
