import React, { useMemo } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { Result, ResultCard } from './ResultCard';

export interface Props {
  results: Result[]
}

export const Results:React.SFC<Props> = ({ results }) => {
  return useMemo(()=>{
    const resultCards = results.map((res)=>{
      const { service } = res;
      return (
        <ResultCard key={service} result={res} />
      );
    });
    
    return (
      <View style={styles.results}>
        {resultCards}
      </View>
    );
  }, [results]);
}

const styles = StyleSheet.create({
  results: {
    backgroundColor: 'white',
  }
});