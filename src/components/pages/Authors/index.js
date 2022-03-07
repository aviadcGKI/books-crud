import React, { useState, useEffect } from 'react'
import { db } from 'db'
import { StyledListContainer } from 'components/styledComponents';
import AuthorsList from 'components/AuthorsList';

function Authors() {
  const [authorsList, setAuthorsList] = useState(null);

  //get the authors collection
  const authorsCollectionRef = db.collection("authors");

  useEffect(() => {
    const getAllAuthors = async () => {
      try {
        const data = await authorsCollectionRef.get();
        const activeAuthorList = [];
        data.docs.forEach((doc) => {
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

  const displayAuthorList = () => {
    return authorsList.map((author) => {
      const path = `/author/${author.id}`
      return <AuthorsList
        key={author.id}
        path={path}
        authorName={author.name}
        authorCountery={author.country}
        imageUrl={author.imageUrl}
      />
    })
  }

  return (
    <>
      <StyledListContainer>
        {authorsList && displayAuthorList()}
      </StyledListContainer>

    </>
  )
}

export default Authors