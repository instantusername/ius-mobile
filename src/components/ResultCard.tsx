import React from 'react';
import { Text, Body } from 'native-base';
import { styles, StyledCard, StatusText, CardItemTop, CardItemBottom } from '../styles/ResultCard';

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
    <StyledCard transparent style={availability && styles.availableCard}>
      <CardItemTop
        header
        style={availability ? styles.availableTopCardItem : styles.takenTopCardItem}
      >
        <Text style={availability ? styles.availableHeader : styles.takenHeader}>{service}</Text>
      </CardItemTop>
      <CardItemBottom
        style={availability ? styles.availableBottomCardItem : styles.takenBottomCardItem}
      >
        <Body>
          <StatusText style={availability ? { ...styles.availableText } : { ...styles.takenText }}>
            {availability ? 'Available' : 'Taken'}
          </StatusText>
        </Body>
      </CardItemBottom>
    </StyledCard>
  );
};
