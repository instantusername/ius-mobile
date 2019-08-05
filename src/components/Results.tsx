import React, { useMemo, useContext } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Result, ResultCard } from './ResultCard';
import { Section } from '../styles';
import { MainContext } from './MainProvider';

const ResultsSection = styled.View`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  flex-direction: row;
`;

export const Results: React.FC<{ results }> = ({ results }) => {
  // const results: Result[] = [
  //   {
  //     service: 'Facebook',
  //     url: 'https://www.facebook.com/usernam',
  //     availability: true,
  //   },
  //   {
  //     service: 'Twitter',
  //     url: 'https://www.twitter.com/username',
  //     availability: false,
  //   },
  //   {
  //     service: 'Instagram',
  //     url: 'https://www.instagram.com/username',
  //     availability: false,
  //   },
  //   {
  //     service: 'Youtube',
  //     url: 'https://www.youtube.com/username',
  //     availability: true,
  //   },
  // ];
  return useMemo(() => {
    // console.log(results);
    return (
      <Section>
        <ResultsSection>
          <FlatList
            data={results}
            renderItem={({ item }) => <ResultCard key={item.service} result={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </ResultsSection>
      </Section>
    );
  }, [results, results]);
};
