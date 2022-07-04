import { ThemeContext } from "./Context/ThemeContext.js";
import { useContext } from "react";

export const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
        <button onClick={toggleTheme}>Toggle The Theme</button>
    </div>
  )
}
