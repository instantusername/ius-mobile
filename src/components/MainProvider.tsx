import React, { useReducer } from 'react';
import { ServiceResult } from '../api';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const MainContext = React.createContext([]);

const MainProvider: React.SFC<Props> = ({ children }) => {
  const initialState: { results: ServiceResult[] } = {
    results: [],
  };

  const useMainReducer = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_RESULT':
        return { results: [...state.results, action.payload] };
      case 'CLEAN':
        return { results: [] };
      default:
        return state;
    }
  }, initialState);
  return <MainContext.Provider value={useMainReducer}>{children}</MainContext.Provider>;
};
export default MainProvider;
