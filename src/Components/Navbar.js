import { ThemeContext } from "./Context/ThemeContext.js";
import { useContext } from "react";
import { AuthContext } from './Context/AuthContext.js';
import { BooksContext } from './Context/BooksContext';

export const Navbar = () => {
	const contextType = useContext(ThemeContext);
	const { isLightTheme, light, dark } = contextType;
	const theme = isLightTheme ? light : dark;

	const { books } = useContext(BooksContext)

	const authContext = useContext(AuthContext)
	const { isAuthenticated, toggleAuth} = authContext
	return (
		<nav style={{ background: theme.ui, color: theme.syntax }}>
			<h1>New Reading List</h1>
			<p>Currently you have { books.length } books to get through </p>
			<div onClick={toggleAuth}>
				{ isAuthenticated ? 'logged in' : 'logged out'}
			</div>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};
