import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { db } from 'db'

import Container from 'components/styledComponents/styledContainer'
import { StyledListContainer } from 'components/styledComponents';
import BooksNavbar from '../../BooksNavbar';
import BooksList from 'components/BooksList';

const Books = () => {
  const [booksList, setBooksList] = useState();
  const [booksListFilterd, setBooksListFilterd] = useState();
  const [authorsList, setAuthorsList] = useState();
  // const [selectedAuthor, setSelectedAuthor] = useState(null);

  const history = useHistory();

  //get the collections ref
  const booksCollectionRef = db.collection("books");
  const authorsCollectionRef = db.collection("authors");

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const data = await booksCollectionRef.where("isActive", "==", true).get();
        const activeBooksList = [];
        data.docs.forEach((doc) => {
          activeBooksList.push({ ...doc.data(), id: doc.id })
        });
        setBooksList([...activeBooksList]);
        setBooksListFilterd([...activeBooksList]);
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

  }, [booksList]);

  const handleSelectedAuthor = async (selectedAuthor) => {
    if (!selectedAuthor) {
      return setBooksListFilterd(booksList);
    }
    try {
      const activeBooksList = [];
      const booksData = await booksCollectionRef.where("author", "==", selectedAuthor).where("isActive", "==", true).get();
      console.log(booksData);
      booksData.docs.forEach((book) => {
        activeBooksList.push({ ...book.data(), id: book.id })
      })
      setBooksListFilterd(activeBooksList);
    } catch (e) {
      console.log(e);
    }
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
        <BooksNavbar authorsList={authorsList} handleSelectedAuthor={handleSelectedAuthor} />
        <StyledListContainer>
          {booksListFilterd && displayBooksList()}
        </StyledListContainer>
      </Container>

    </>
  )
}

export default Books