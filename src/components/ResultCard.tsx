import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  result: Result;
}

export interface Result {
  service: string,
  url: string,
  availability: boolean
}

export const ResultCard:React.SFC<Props> = ({ result }) => {
  const { service, url, availability } = result;
      return (
        <View style={styles.card}>
          <View>
            <Text>
              {service}
            </Text>
          </View>
          <View>
            <Text>
              {availability ? "available" : "taken"}
            </Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    width: '40%',
    margin: '5%'
  }
});