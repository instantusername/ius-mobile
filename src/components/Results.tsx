import React, { useMemo, useContext } from 'react';
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

export const Results: React.SFC<{}> = () => {
  const results: Result[] = [
    {
      service: 'Facebook',
      url: 'https://www.facebook.com/usernam',
      availability: true,
    },
    {
      service: 'Twitter',
      url: 'https://www.twitter.com/username',
      availability: false,
    },
    {
      service: 'Instagram',
      url: 'https://www.instagram.com/username',
      availability: false,
    },
    {
      service: 'Youtube',
      url: 'https://www.youtube.com/username',
      availability: true,
    },
  ];
  const [state] = useContext(MainContext);
  return useMemo(() => {
    // console.log('the state is: ', JSON.stringify(state.results));
    const resultCards = state.results.map(res => {
      return <ResultCard key={res.service} result={res} />;
    });

    return (
      <Section>
        <ResultsSection>{resultCards}</ResultsSection>
      </Section>
    );
  }, [results, state]);
};
