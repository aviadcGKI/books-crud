import React, { useState } from 'react'
import { db } from 'db' 
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function Home() {

  const [authorName,setAuthorName] = useState('');

  //get the authors collection
  const authorsCollectionRef = collection(db, "authors");

  const createAuthor = async ()=>{
    try{
      const data = await addDoc(authorsCollectionRef, { name: authorName });
      console.log(data);
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
    <input onChange={(e)=>setAuthorName(e.target.value)} placeholder='author name'/>
    <button onClick={createAuthor}>create author</button>  
    </>
  )
}

export default Home