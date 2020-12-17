import React, { useState } from 'react';

import { Basics } from 'utils/types/Beverage';
import { Status } from 'utils/helpers/serverCall';

export const SearchContext = React.createContext({
  searchResults: [],
  setStatus: (val: Status) => {
    val;
  },
  status: Status.idle,
  setSearchResults: (val: Basics[]) => {
    val;
  },
});

const Search: React.FC = ({ children }) => {
  const [status, setStatus] = useState(Status.idle);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setStatus,
        status,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default Search;
