import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const StyledSearch = styled.View`
  background-color: #000000;
  padding-bottom: 20;
`;

export const StyledTitle = styled.Text`
  font-size: 23;
  text-align: center;
  margin-bottom: 20;
  color: #ffffff;
`;

export const StyledInput = styled.TextInput`
  border-radius: 36;
  height: 30;
  border-width: 1;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 3;
  padding-top: 0;
  text-align: center;
  background-color: #ffffff;
  width: 75%;
  align-self: center;
`;
