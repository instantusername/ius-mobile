import React, { useMemo } from 'react';
import styled from 'styled-components/native';
import { Result, ResultCard } from './ResultCard';
import { Section } from '../styles';

export interface Props {
  results: Result[];
}

const ResultsSection = styled.View`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  flex-direction: row;
`;

export const Results: React.SFC<Props> = ({ results }) => {
  return useMemo(() => {
    const resultCards = results.map(res => {
      const { service } = res;
      return <ResultCard key={service} result={res} />;
    });

    return (
      <Section>
        <ResultsSection>{resultCards}</ResultsSection>
      </Section>
    );
  }, [results]);
};
