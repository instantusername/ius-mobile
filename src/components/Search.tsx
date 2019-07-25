import React from 'react';
import { Section } from '../styles';
import { StyledSearch, StyledTitle, StyledInput } from '../styles/Search';

export interface Props {
  onSearch: (text: string) => void;
}

export const Search: React.SFC<Props> = ({ onSearch }) => {
  return (
    <StyledSearch>
      <Section>
        <StyledTitle>Instant Username Search</StyledTitle>

        <StyledInput onChangeText={onSearch} placeholder="Search username" />
      </Section>
    </StyledSearch>
  );
};
