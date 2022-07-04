import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({children}){
        const [isLightTheme, setisLightTheme] = useState(true) 
        const [light, setLight] = useState ({ syntax:'#555', ui: '#ddd', bg: '#eee'})
        const [dark, isDark] = useState ({ syntax:'#ddd', ui: '#333', bg: '#555'})
        
        const toggleTheme = () => {
            setisLightTheme ( !isLightTheme )
        }

        return (
            <ThemeContext.Provider value={{isLightTheme, light, dark, toggleTheme: toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        )
    }



