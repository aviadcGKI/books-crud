import React , {useEffect, useState} from 'react'
import { useLocation , useParams } from 'react-router-dom';
import { StyledListContainer } from 'components/styledComponents'; 
import { db } from 'db';
import firebase from "firebase/app";
import PreviewList from 'components/PreviewList';




function Profile() {

  const [bookTitle,setBookTitle] = useState('');
  const [bookGenre,setBookGenre] = useState('');
  const [bookPrice,setBookPrice] = useState('');
  const [bookDescription,setBookDescription] = useState('');
  const [booksList,setBooksList] = useState(null);

  const authorsCollectionRef = db.collection("authors");
  const booksCollectionRef = db.collection("books");
 
  //for the author id in the url
  const params = useParams();

  useEffect(()=>{
    const getAllBooks = async ()=>{
      try{
        const data = await authorsCollectionRef.doc(params.id).get();
        const activeBooksList = [];
        data.data().books.forEach(async (bookId)=>{
          const book = await booksCollectionRef.doc(bookId).get();
          if(book.data().isActive){
            activeBooksList.push({...book.data(),id: book.id})
          }
        });
        setBooksList(activeBooksList);
      }catch(e){
        console.log(e);
      }
    };
    if(!booksList){
      getAllBooks();
    }
  })

  const addBook = async()=>{
    const book = {
      title: bookTitle,
      genre: bookGenre,
      price: bookPrice,
      description: bookDescription,
      isActive: true
    }
    try{
      const bookData = await booksCollectionRef.add(book);
      const authorBookData = await authorsCollectionRef.doc(params.id).update({books: firebase.firestore.FieldValue.arrayUnion(bookData.id)})
      console.log(bookData);
    }catch(e){
      console.log(e)
    }
  }

  const displayBooksList = ()=>{
    return booksList.map((book)=>{
      return <PreviewList
        key={book.id}
        path=""
        title={book.title}
        subTitle={book.genre}
      />
    })
  }

  return (
    <>
      <h2>add new book</h2>
      <input placeholder="book title" onChange={(e)=>setBookTitle(e.target.value)}/>
      <input placeholder="book genre" onChange={(e)=>setBookGenre(e.target.value)}/>
      <input placeholder="book price" onChange={(e)=>setBookPrice(e.target.value)}/>
      {/* <div>
        <label>published date  </label>
        <input type="date" placeholder="published date"/>
      </div> */}
      <textarea placeholder='book description' rows='10' cols='50' onChange={(e)=>setBookDescription(e.target.value)}/>
      <button onClick={addBook}>add book</button>
      <StyledListContainer>
        {booksList && displayBooksList()}
      </StyledListContainer>
    </>
  )
}

export default Profile