import React, { useContext, useEffect, useState, useMemo } from 'react';
import { debounce } from 'debounce';
import { Section } from '../styles';
import { StyledSearch, StyledTitle, StyledInput } from '../styles/Search';
import { fetchAllSites, check, Sites, ServiceInfo, ServiceResult } from '../api';
import { MainContext } from './MainProvider';

export const Search: React.SFC<{}> = () => {
  const [_state, dispatch] = useContext(MainContext);
  const [sites, setSites] = useState<Sites>([]);

  useEffect(() => {
    const fetchSites = async () => {
      const sitesData = await fetchAllSites();
      setSites(sitesData);
    };
    fetchSites();
  }, []);

  return useMemo(() => {
    const checkService = async (service: ServiceInfo, username: string) => {
      const result: ServiceResult = await check(service, username);
      console.log(JSON.stringify(result));
    };
    const onSearch = (text: string): void => {
      sites.forEach(site => {
        checkService(site, text);
      });
      // dispatch({ type: 'ADD_RESULT', payload: text });
    };
    const debouncedSearch = debounce(onSearch, 800);
    return (
      <StyledSearch>
        <Section>
          <StyledTitle>Instant Username Search</StyledTitle>

          <StyledInput onChangeText={debouncedSearch} placeholder="Search username" />
        </Section>
      </StyledSearch>
    );
  }, [MainContext, sites]);
};
