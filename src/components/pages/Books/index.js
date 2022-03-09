import React, { useState, useEffect } from 'react'
import { db } from 'db'
import { StyledListContainer } from 'components/styledComponents';
import BooksList from 'components/BooksList';
import BooksNavbar from 'components/booksNavbar';
import Container from 'components/styledComponents/styledContainer'

function Books() {
  const [booksList, setBooksList] = useState();
  const [booksListFilterd, setBooksListFilterd] = useState();
  const [authorsList, setAuthorsList] = useState();
  const [selctedAuthor, setSelectedAuthor] = useState(null);

  //get the collections ref
  const booksCollectionRef = db.collection("books");
  const authorsCollectionRef = db.collection("authors");

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
        setBooksList([...activeBooksList]);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    const getAllAuthors = async () => {
      try {
        const data = await authorsCollectionRef.get();
        const activeAuthorsList = [];
        data.docs.forEach((doc) => {
          if (doc.data().isActive) {
            activeAuthorsList.push({ value: doc.id, label: doc.data().name })
          }
        });
        setAuthorsList(activeAuthorsList);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    if (!authorsList) {
      getAllAuthors();
    }

    if (!booksList) {
      getAllBooks();
    }

    if (selctedAuthor) {
      const filterdList = booksList.filter((book) => {
        return book.author === selctedAuthor
      })
      setBooksListFilterd(filterdList);
    } else {
      setBooksListFilterd(booksList);
    }
  }, [selctedAuthor, booksList]);


  const displayBooksList = () => {
    return booksListFilterd.map((book) => {
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
      <Container>
        <BooksNavbar authorsList={authorsList} setSelectedAuthor={setSelectedAuthor} />
        <StyledListContainer>
          {booksListFilterd && displayBooksList()}
        </StyledListContainer>
      </Container>

    </>
  )
}

export default Books