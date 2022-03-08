import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function Profile() {

  const location = useLocation()
  const history = useHistory();

  useEffect(()=>{
    console.log(location.state);
  },[location.state]);

  const goToCreateBook = ()=>{
    const state = {
      authorId: location.state.authorId
    }
    history.push('/createbook',state);
  }

  return (
    <>
      <Card style={{ width: '20rem' , height: '25rem' }}>
        <Card.Img variant="top" src={location.state.imageUrl} height="400" />
        <Card.Body>
          <Card.Title>{location.state.authorName}</Card.Title>
          <Card.Title>{location.state.authorAge}</Card.Title>
          <Card.Title>{location.state.authorCountry}</Card.Title>
          <Button variant="primary" onClick={goToCreateBook}>Add Book</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Profile