import { useState, useEffect } from 'react'
import api from 'components/api';
import { db } from 'db'
import { StyledSpinner } from 'components/styledComponents';
import Container from 'components/styledComponents/styledContainer'
import { StyledListContainer } from 'components/styledComponents';

import BooksList from 'components/BooksList';
import BooksNavbar from 'components/booksNavbar';

const Books = () => {
  const [booksList, setBooksList] = useState();
  const [booksListFilterd, setBooksListFilterd] = useState();
  const [authorsList, setAuthorsList] = useState();
  const [isLoading, setIsLoading] = useState(false);


  //get the collections ref
  const booksCollectionRef = db.collection("books");
  const authorsCollectionRef = db.collection("authors");

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const data = await booksCollectionRef.where("isActive", "==", true).get();
        setBooksList(handleBooksList(data));
        setBooksListFilterd(handleBooksList(data));
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    const getAllAuthors = async () => {
      try {
        const data = await authorsCollectionRef.where("isActive", "==", true).get();
        const activeAuthorsList = [];
        data.docs.forEach((doc) => {
          activeAuthorsList.push({ value: doc.id, label: doc.data().name })
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

  }, [booksList, authorsCollectionRef, authorsList, booksCollectionRef]);

  const handleSelectedAuthor = async (selectedAuthor) => {
    if (!selectedAuthor) {
      return setBooksListFilterd(booksList);
    }
    try {
      setIsLoading(true);
      const booksData = await booksCollectionRef.where("author", "==", selectedAuthor).where("isActive", "==", true).get();
      setBooksListFilterd(handleBooksList(booksData));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  const handleGetBooksByPages = async (pages) => {
    try {
      setIsLoading(true);
      console.log(pages, "pages");
      const { data } = await api.post('books/books-by-pages', { pages });
      console.log(data, 'api data');
      setBooksListFilterd(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err)
    }
  }

  const handleBooksList = (booksData) => {
    const activeBooksList = [];
    booksData.docs.forEach((book) => {
      activeBooksList.push({ ...book.data(), id: book.id })
    })
    return activeBooksList;
  }

  const displayBooksList = () => {
    return booksListFilterd.map((book) => {
      return <BooksList
        key={Math.random()}
        bookId={book.id}
        bookTitle={book.title}
        bookGenre={book.genre}
        bookPrice={book.price}
        bookPages={book.pages}
        bookDescription={book.description}
        bookAuthor={book.author}
        imageUrl={book.imageUrl}
      />
    })
  }

  return (
    <>
      <Container>
        <BooksNavbar authorsList={authorsList} handleSelectedAuthor={handleSelectedAuthor} handleGetBooksByPages={handleGetBooksByPages} />
        <StyledListContainer>
          {(!isLoading && booksListFilterd) && displayBooksList()}
        </StyledListContainer>
        {isLoading && <StyledSpinner />}
      </Container>

    </>
  )
}

export default Books