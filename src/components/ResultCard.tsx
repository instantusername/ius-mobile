import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
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

  function handleClick(): void {
    console.log(url);
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  return (
    <StyledCard transparent style={availability && styles.availableCard}>
      <TouchableOpacity onPress={handleClick}>
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
            <StatusText
              style={availability ? { ...styles.availableText } : { ...styles.takenText }}
            >
              {availability ? 'Available' : 'Taken'}
            </StatusText>
          </Body>
        </CardItemBottom>
      </TouchableOpacity>
    </StyledCard>
  );
};
