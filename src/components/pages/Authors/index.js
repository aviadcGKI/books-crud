import { useState, useEffect } from 'react';
import { db } from 'db';
import { StyledListContainer } from 'components/styledComponents';
import AuthorsList from 'components/AuthorsList';
import Container from 'components/styledComponents/styledContainer';

const Authors = () => {
  const [authorsList, setAuthorsList] = useState([]);

  //get the authors collection
  const authorsCollectionRef = db.collection("authors");

  useEffect(() => {
    const getAllAuthors = async () => {
      try {
        const data = await authorsCollectionRef.where("isActive","==",true).get();
        const activeAuthorsList = [];
        data.docs.forEach((doc) => {
          activeAuthorsList.push({ ...doc.data(), id: doc.id })
        });
        setAuthorsList(activeAuthorsList);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (!authorsList.length) {
      getAllAuthors();
    }
  }, [authorsCollectionRef,authorsList.length,])

  const displayAuthorList = () => {
    return authorsList.map((author) => {
      return <AuthorsList
        key={Math.random()}
        authorId={author.id}
        authorName={author.name}
        authorCountry={author.country}
        authorAge={author.age}
        imageUrl={author.imageUrl}
      />
    })
  }

  return (
    <Container justify='center'>
      <StyledListContainer>
        {!!authorsList.length && displayAuthorList()}
      </StyledListContainer>
    </Container>
  )
}

export default Authors