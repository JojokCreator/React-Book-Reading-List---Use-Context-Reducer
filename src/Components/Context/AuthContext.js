import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticate] = useState(false)

    const toggleAuth = () => {
        setIsAuthenticate ( !isAuthenticated )
    }

  return (
    <AuthContext.Provider value={{isAuthenticated, toggleAuth: toggleAuth}}>
    { children }
    </AuthContext.Provider>
  )
}
