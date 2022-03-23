import { createContext, useContext, useState } from "react";
const NavbarContext = createContext(true);
const NavbarProvider = ({ children }) => {
  const [showResponsiveNavbarForMobile, setShowResponsiveNavbarForMobile] =
    useState(false);

  return (
    <NavbarContext.Provider
      value={{
        showResponsiveNavbarForMobile,
        setShowResponsiveNavbarForMobile,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
const useNavbar = () => useContext(NavbarContext);
export { useNavbar, NavbarProvider };
