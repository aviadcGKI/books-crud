import React ,{useState} from 'react'
import { db } from '../../db/index.js' 
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Author() {
  const [authorName,setAuthorName] = useState('');
  const [authorAge,setAuthorAge] = useState(null);
  const [authorCountry,setAuthorCountry] = useState(null);

  //get the authors collection
  const authorsCollectionRef = collection(db, "authors");

  const addAuthor = async ()=>{
    try{
      const data = await addDoc(authorsCollectionRef, { name: authorName,age: authorAge, country: authorCountry });
      console.log(data);
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
    <input onChange={(e)=>setAuthorName(e.target.value)} placeholder='author name'/>
    <input onChange={(e)=>setAuthorAge(e.target.value)} placeholder='author age'/>
    <input onChange={(e)=>setAuthorCountry(e.target.value)} placeholder='author country'/>
    <button onClick={addAuthor}>add author</button>  
    </>
  )
}

export default Author