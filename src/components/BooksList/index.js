import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function BooksList(props) {

  const history = useHistory();

  const goToBookDetails = () => {
    const book = {
      bookTitle: props.bookTitle,
      bookGenre: props.bookGenre,
      bookPrice: props.bookPrice,
      bookPages: props.bookPages,
      bookDescription: props.bookDescription,
      bookAuthor: props.bookAuthor,
      imageUrl: props.imageUrl
    }
    history.push(`/book/${props.bookId}`,book);
  }
  return (
    <>
      <Card style={{ width: '15rem', height: '22rem' }}>
        <Card.Img variant="top" src={props.imageUrl} height="250" />
        <Card.Body>
          <Card.Title>{props.bookTitle}</Card.Title>
          <Button variant="primary" onClick={goToBookDetails}>More details</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default BooksList