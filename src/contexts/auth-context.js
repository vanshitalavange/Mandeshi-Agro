import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    loginStatus: false,
    userDetails: { firstName: "", cart: [], wishlist: [] }
  })
  return <AuthContext.Provider value={{ userState, setUserState }}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }