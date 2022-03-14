import React, { useState, useEffect } from 'react'
import { db } from 'db'
import { StyledListContainer } from 'components/styledComponents';
import BooksList from 'components/BooksList';
import BooksNavbar from 'components/BooksNavbar';
import Container from 'components/styledComponents/styledContainer'

function Books() {
  const [booksList, setBooksList] = useState();
  const [booksListFilterd, setBooksListFilterd] = useState();
  const [authorsList, setAuthorsList] = useState();
  // const [selectedAuthor, setSelectedAuthor] = useState(null);

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

  const handleSelectedAuthor = async (selectedAuthor)=>{
    if(!selectedAuthor){
      setBooksListFilterd([...booksList]);
      return;
    }
    try{
      const authorData = await authorsCollectionRef.doc(selectedAuthor).get();
      console.log(authorData);
      const activeBooksList = [];
      await Promise.all(authorData.data().books.map(async(book)=>{
        const bookData = await booksCollectionRef.doc(book).get();
        activeBooksList.push({ ...bookData.data(), id: bookData.id })
        // console.log(bookData);
      }));
      console.log(activeBooksList,"activebook");
      setBooksListFilterd( activeBooksList);
    }catch(e){
      console.log(e);
    }
  }

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
        <BooksNavbar authorsList={authorsList} handleSelectedAuthor={handleSelectedAuthor} />
        <StyledListContainer>
          {booksListFilterd && displayBooksList()}
        </StyledListContainer>
      </Container>

    </>
  )
}

export default Books