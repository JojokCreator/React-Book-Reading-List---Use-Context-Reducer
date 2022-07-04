import { useContext } from 'react';
import { BooksContext } from './Context/BooksContext';
import { ThemeContext } from './Context/ThemeContext.js';


export const BookDetails = ({ book }) => {
    const { isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;

    const { dispatch } = useContext(BooksContext)
  return (
    <li onClick={()=> dispatch({type: 'REMOVE_BOOK', id: book.id})} style={{ background: theme.ui}}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
    </li>
  )
}
