import React, { useContext, useEffect, useState, useMemo } from 'react';
import { debounce } from 'lodash';
import { Section } from '../styles';
import { StyledSearch, StyledTitle, StyledInput } from '../styles/Search';
import { fetchAllSites, check, Sites, ServiceInfo, ServiceResult } from '../api';

interface Props {
  addResult: (result: ServiceResult) => void;
  clear: () => void;
}

// AbortController to cancel fetch requests
var controller;

export const Search: React.FC<Props> = ({ addResult, clear }) => {
  const [sites, setSites] = useState<Sites>([]);

  useEffect(() => {
    const fetchSites = async () => {
      const sitesData = await fetchAllSites();
      setSites(sitesData);
    };
    fetchSites();
  }, []);

  return useMemo(() => {
    const checkService = async (service: ServiceInfo, username: string, signal: AbortSignal) => {
      const result: ServiceResult = await check(service, username, signal);
      if (result) {
        addResult(result);
      }
    };

    const onSearch = (text: string): void => {
      // instantiniate a new controller for this cycle
      controller = new AbortController();
      sites.forEach(site => {
        checkService(site, text, controller.signal);
      });
      // checkService(sites[0], text, controller.signal);
    };

    const debouncedSearch = debounce(onSearch, 800);
    const textChanged = (text: string) => {
      if (controller !== undefined && !controller.signal.aborted) {
        controller.abort();
      }
      clear();
      debouncedSearch(text);
    };
    return (
      <StyledSearch>
        <Section>
          <StyledTitle>Instant Username Search</StyledTitle>
          <StyledInput onChangeText={textChanged} placeholder="Search username" />
        </Section>
      </StyledSearch>
    );
  }, [sites]);
};
