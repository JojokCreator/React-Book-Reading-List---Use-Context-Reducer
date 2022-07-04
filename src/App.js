import { Navbar } from "./Components/Navbar.js";
import { Booklist } from "./Components/Booklist.js";
import {ThemeContextProvider} from "./Components/Context/ThemeContext.js";
import { createContext } from 'react';
import { ThemeToggle } from './Components/ThemeToggle';
import { AuthContextProvider } from "./Components/Context/AuthContext.js";
import BooksContextProvider from "./Components/Context/BooksContext.js";
import NewBookForm from "./Components/BookForm.js";

export const ThemeContext = createContext()

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>
      <BooksContextProvider>
      <Navbar />
      <Booklist />
      <NewBookForm/>
      </BooksContextProvider>
      <ThemeToggle />
      </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
