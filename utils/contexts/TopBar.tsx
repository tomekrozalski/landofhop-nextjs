import { createContext, useState } from 'react';

export const TopBarContext = createContext({
  loginbar: false,
  navbar: false,
  searchbarActive: false,
  setLoginbar: (val: boolean) => {
    val;
  },
  setNavbar: (val: boolean) => {
    val;
  },
  setSearchbarActive: (val: boolean) => {
    val;
  },
});

const TopBar: React.FC = ({ children }) => {
  const [loginbar, setLoginbar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [searchbarActive, setSearchbarActive] = useState(false);

  return (
    <TopBarContext.Provider
      value={{
        loginbar,
        navbar,
        searchbarActive,
        setLoginbar,
        setNavbar,
        setSearchbarActive,
      }}
    >
      {children}
    </TopBarContext.Provider>
  );
};

export default TopBar;
