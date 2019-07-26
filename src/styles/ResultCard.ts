import { StyleSheet } from 'react-native';
import { Card, CardItem } from 'native-base';
import styled from 'styled-components/native';

export const StyledCard = styled(Card)`
  width: 47%;
  margin: 1.5%;
  border-radius: 5;
`;

export const StatusText = styled.Text`
  font-size: 13px;
`;

export const CardItemTop = styled(CardItem)`
  padding-bottom: 10;
  padding-left: 20;
  border-top-left-radius: 5;
  border-top-right-radius: 5;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: transparent;
`;
export const CardItemBottom = styled(CardItem)`
  padding-top: 0;
  padding-bottom: 17;
  padding-left: 20;
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: transparent;
`;

export const styles = StyleSheet.create({
  availableCard: {
    backgroundColor: '#fffcde',
  },
  availableTopCardItem: {
    borderColor: '#ffeb3b',
    borderBottomWidth: 0,
    borderWidth: 1.5,
  },
  availableBottomCardItem: {
    borderColor: '#ffeb3b',
    borderTopWidth: 0,
    borderWidth: 1.5,
  },
  takenTopCardItem: {
    borderColor: '#e8e8e8',
    borderBottomWidth: 0,
    borderWidth: 1,
  },
  takenBottomCardItem: {
    borderColor: '#e8e8e8',
    borderTopWidth: 0,
    borderWidth: 1,
  },
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
