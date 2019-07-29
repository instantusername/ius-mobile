import React, { useContext, useEffect, useState, useMemo } from 'react';
import { debounce } from 'lodash';
import { Section } from '../styles';
import { StyledSearch, StyledTitle, StyledInput } from '../styles/Search';
import { fetchAllSites, check, Sites, ServiceInfo, ServiceResult } from '../api';
import { MainContext } from './MainProvider';
// import 'abortcontroller-polyfill';

// AbortController and signal to cancel fetch requests
var controller;

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
    const checkService = async (service: ServiceInfo, username: string, signal: AbortSignal) => {
      const result: ServiceResult = await check(service, username, signal);
      if (result) {
        console.log('checked ---> ' + username);
        dispatch({ type: 'ADD_RESULT', payload: result });
      } else {
        console.log('NOT checked ---> ' + username);
      }
    };

    const onSearch = (text: string): void => {
      // instantiniate a new controller for this cycle
      controller = new AbortController();
      sites.forEach(site => {
        checkService(site, text, controller.signal);
      });
      console.log('finished reqs');
    };

    const debouncedSearch = debounce(onSearch, 800);
    const textChanged = (text: string) => {
      console.log('changed');
      if (controller !== undefined && !controller.signal.aborted) {
        controller.abort();
      }
      dispatch({ type: 'CLEAN' });
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
  }, [MainContext, sites, controller]);
};
