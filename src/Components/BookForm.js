import React, { useContext, useState } from 'react';
import { BooksContext } from './Context/BooksContext';
import { ThemeContext } from './Context/ThemeContext.js';

const NewBookForm = () => {
  const { dispatch } = useContext(BooksContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { isLightTheme, light, dark} = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author }});
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: theme.ui, color: theme.syntax }}>
      <input type="text" placeholder="book title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="author name" value={author}
        onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="add book" />
    </form>
  );
}
 
export default NewBookForm;
