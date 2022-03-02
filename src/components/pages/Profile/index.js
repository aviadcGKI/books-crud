import React , {useEffect, useState} from 'react'
import { useLocation , useParams } from 'react-router-dom';
import { StyledListContainer } from 'components/styledComponents'; 



function Profile() {

  const [bookTitle,setBookTitle] = useState('');
  const [bookGenre,setBookGenre] = useState('');
  const [bookPrice,setBookPrice] = useState('');
  const [bookDescription,setBookDescription] = useState('');
 
  const params = useParams();
  useEffect(()=>{
    
    console.log(params);
  })
  return (
    <>
      <h2>add new book</h2>
      <input placeholder="book title" onChange={(e)=>setBookTitle(e.target.value)}/>
      <input placeholder="book genre" onChange={(e)=>setBookGenre(e.target.value)}/>
      <input placeholder="book price" onChange={(e)=>setBookTitle(e.target.value)}/>
      {/* <div>
        <label>published date  </label>
        <input type="date" placeholder="published date"/>
      </div> */}
      <textarea placeholder='book description' rows='10' cols='50'/>
      <StyledListContainer>

      </StyledListContainer>
    </>
  )
}

export default Profile