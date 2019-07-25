import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import { StyledCard } from '../styles/ResultCard';

export interface Props {
  result: Result;
}

export interface Result {
  service: string;
  url: string;
  availability: boolean;
}

export const ResultCard: React.SFC<Props> = ({ result }) => {
  const { service, url, availability } = result;
  return (
    <StyledCard>
      <CardItem
        header
        style={{
          paddingBottom: 10,
          paddingLeft: 20,
        }}
      >
        <Text style={availability ? styles.availableHeader : styles.takenHeader}>{service}</Text>
      </CardItem>
      <CardItem
        style={{
          paddingTop: 0,
          paddingBottom: 17,
          paddingLeft: 20,
        }}
      >
        <Body>
          <Text style={availability ? styles.availableText : styles.takenText}>
            {availability ? 'Available' : 'Taken'}
          </Text>
        </Body>
      </CardItem>
    </StyledCard>
  );
};

const styles = StyleSheet.create({
  availableHeader: {
    color: 'rgba(0, 0, 0, 0.85)',
  },
  takenHeader: {
    textDecorationLine: 'line-through',
    color: 'rgba(0, 0, 0, 0.45)',
  },
  availableText: {
    color: 'rgba(0, 0, 0, 0.45)',
  },
  takenText: {
    color: 'rgba(0, 0, 0, 0.45)',
  },
});
