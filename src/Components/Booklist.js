import { ThemeContext } from './Context/ThemeContext.js';
import { useContext } from 'react';
import { BooksContext } from './Context/BooksContext';
import { BookDetails } from './BookDetails.js';


export const Booklist = () => {
  const { isLightTheme, light, dark} = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;

  const { books } = useContext(BooksContext)
  
  return books.length ? (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax}}>
        <ul>
        {books.map(book => {
          return (
            <BookDetails book={book} key={book.id} />
        )
        })}
        </ul>
    </div>
  ) : (
    <div className="empty">No books to read</div>
  )
}
