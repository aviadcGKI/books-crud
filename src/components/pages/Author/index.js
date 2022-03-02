import React ,{useState, useEffect} from 'react'
import { db } from '../../../db/index.js' 
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import ListContainer from '../../styledComponents/styledListContainer/index.js';
import PreviewList from 'components/PreviewList/index.js';

function Author() {
  const [authorsList,setAuthorsList] = useState(null);
  const [authorName,setAuthorName] = useState('');
  const [authorAge,setAuthorAge] = useState(null);
  const [authorCountry,setAuthorCountry] = useState(null);

  //get the authors collection
  const authorsCollectionRef = collection(db, "authors");

  useEffect(()=>{
    const getAllAuthors = async ()=>{
      try{
        const data = await getDocs(authorsCollectionRef)
        setAuthorsList(
          data.docs.map((doc)=>{
          return {...doc.data(),id: doc.id}
        })
        );
        console.log(authorsList);
      }catch(e){
        console.log(e);
      }
    };
    if(!authorsList){
      getAllAuthors();
    }
  })

  const addAuthor = async ()=>{
    try{
      const data = await addDoc(authorsCollectionRef, { name: authorName,age: authorAge, country: authorCountry });
      console.log(data);
      setAuthorsList(null);
    }catch(e){
      console.log(e)
    }
  }

  

  const displayAuthorList = ()=>{
    return authorsList.map((author)=>{
      return <PreviewList
        key={author.id}
        title={author.name}
        subTitle={author.country}
      />
    })
  }

  return (
    <>
      <input onChange={(e)=>setAuthorName(e.target.value)} placeholder='author name'/>
      <input onChange={(e)=>setAuthorAge(e.target.value)} placeholder='author age'/>
      <input onChange={(e)=>setAuthorCountry(e.target.value)} placeholder='author country'/>
      <button onClick={addAuthor}>add author</button>        
      <ListContainer>
        {authorsList && displayAuthorList()}
      </ListContainer>
       
    </>
  )
}

export default Author