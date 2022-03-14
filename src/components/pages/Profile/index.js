import React, { useEffect, useState } from 'react'
import { useLocation , useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import Container from 'components/styledComponents/styledContainer';

function Profile() {

  const location = useLocation()
  const history = useHistory();
  const [authorData,] = useState(location.state);

  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  const goToCreateBook = () => {
    const { authorId } = authorData;
    // const state = {
    //   authorId: location.state.authorId
    // }
    history.push('/createbook', { authorId });
  }

  return (
    <>
      <Container marginTop='4rem'>
        <Card style={{ width: '20rem', height: '25rem' }}>
          <Card.Img variant="top" src={location.state.imageUrl} height="400" />
          <Card.Body>
            <Card.Title>Name: {location.state.authorName}</Card.Title>
            <Card.Title>Age: {location.state.authorAge}</Card.Title>
            <Card.Title>Country: {location.state.authorCountry}</Card.Title>
            <Button variant="primary" onClick={goToCreateBook}>Add Book</Button>
            
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Profile