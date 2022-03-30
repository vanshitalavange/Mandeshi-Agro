import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", cart: [], wishlist: [] })
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])
  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails }}>{children}</AuthContext.Provider>
}
const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider }