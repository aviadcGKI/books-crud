import React, { useState, useEffect } from 'react'
import { db } from 'db'
import { StyledListContainer } from 'components/styledComponents';
import PreviewList from 'components/PreviewList/index.js';

function Authors() {
  const [authorsList, setAuthorsList] = useState(null);
  const [authorName, setAuthorName] = useState('');
  const [authorAge, setAuthorAge] = useState(null);
  const [authorCountry, setAuthorCountry] = useState(null);

  //get the authors collection
  const authorsCollectionRef = db.collection("authors");

  useEffect(() => {
    const getAllAuthors = async () => {
      try {
        const data = await authorsCollectionRef.get();
        const activeAuthorList = [];
        data.docs.forEach((doc) => {
          // console.log(doc.data(),"is active");
          if (doc.data().isActive) {
            activeAuthorList.push({ ...doc.data(), id: doc.id })
          }
        });
        setAuthorsList(activeAuthorList);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (!authorsList) {
      getAllAuthors();
    }
  },[])

  const addAuthor = async () => {
    const author = {
      name: authorName,
      age: authorAge,
      country: authorCountry,
      isActive: true
    }
    try {
      const data = await authorsCollectionRef.add(author);
      console.log(data);
      setAuthorsList(null);
    } catch (e) {
      console.log(e)
    }
  }

  const displayAuthorList = () => {
    return authorsList.map((author) => {
      const path = `/author/${author.id}`
      return <PreviewList
        key={author.id}
        path={path}
        title={author.name}
        subTitle={author.country}
      />
    })
  }

  return (
    <>
      <input onChange={(e) => setAuthorName(e.target.value)} placeholder='author name' />
      <input onChange={(e) => setAuthorAge(e.target.value)} placeholder='author age' />
      <input onChange={(e) => setAuthorCountry(e.target.value)} placeholder='author country' />
      <button onClick={addAuthor}>add author</button>
      <StyledListContainer>
        {authorsList && displayAuthorList()}
      </StyledListContainer>

    </>
  )
}

export default Authors