import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../../Reducers/bookReducer';
export const BooksContext = createContext();

const BooksContextProvider = ({children}) => {
  const [books, dispatch] = useReducer(bookReducer, [], ()=>{
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : []
  });
  
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BooksContext.Provider value={{books, dispatch}}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider;