import React, { useState, useEffect } from 'react'
import { db } from 'db'
import { StyledListContainer } from 'components/styledComponents';
import BooksList from 'components/BooksList';

function Books() {
  const [booksList, setBooksList] = useState(null);

  //get the books collection
  const booksCollectionRef = db.collection("books");

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const data = await booksCollectionRef.get();
        const activeBooksList = [];
        data.docs.forEach((doc) => {
          if (doc.data().isActive) {
            activeBooksList.push({ ...doc.data(), id: doc.id })
          }
        });
        setBooksList(activeBooksList);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (!booksList) {
      getAllBooks();
    }
  }, [])

  const displayBooksList = () => {
    return booksList.map((book) => {
      return <BooksList
        key={Math.random()}
        bookId={book.id}
        bookTitle={book.title}
        bookGenre={book.Genre}
        bookPrice={book.price}
        bookPages={book.pages}
        bookDescription={book.description}
        bookAuthor={book.Author}
        imageUrl={book.imageUrl}
      />
    })
  }

  return (
    <>
      <StyledListContainer>
        {booksList && displayBooksList()}
      </StyledListContainer>

    </>
  )
}

export default Books