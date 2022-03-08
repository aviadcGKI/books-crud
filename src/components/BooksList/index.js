import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function BooksList(props) {

  const history = useHistory();

  const goToProfile = () => {
    const state = {
    //   authorName: props.authorName,
    //   authorAge: props.authorAge,
    //   authorCountry: props.authorCountry,
    //   imageUrl: props.imageUrl,
    //   authorId: props.authorId
    }
    // history.push(`/author/${props.authorId}`,state);
  }
  return (
    <>
      <Card style={{ width: '15rem', height: '22rem' }}>
        <Card.Img variant="top" src={props.imageUrl} height="250" />
        <Card.Body>
          <Card.Title>{props.bookTitle}</Card.Title>
          <Button variant="primary" onClick={goToProfile}>More details</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default BooksList