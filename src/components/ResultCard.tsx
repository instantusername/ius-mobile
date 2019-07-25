import React from 'react';
import styled from 'styled-components/native';
import { Card, CardItem, Text, Body } from 'native-base';

export interface Props {
  result: Result;
}

export interface Result {
  service: string;
  url: string;
  availability: boolean;
}

const StyledCard = styled(Card)`
  width: 47%;
  margin: 1.5%;
`;

export const ResultCard: React.SFC<Props> = ({ result }) => {
  const { service, url, availability } = result;
  return (
    <StyledCard>
      <CardItem header>
        <Text>{service}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{availability ? 'available' : 'taken'}</Text>
        </Body>
      </CardItem>
    </StyledCard>
  );
};
