import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Container from 'components/styledComponents/styledContainer';
import BackNavbar from 'components/BackNavbar';

function BookDetails() {

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
            <BackNavbar></BackNavbar>
            <Container marginTop='4rem'>
                <Card style={{ width: '20rem', height: '40rem' }}>
                    <Card.Img variant="top" src={location.state.imageUrl} height="400" />
                    <Card.Body>
                        <Card.Title>Title: {location.state.bookTitle}</Card.Title>
                        <Card.Title>Genre: {location.state.bookGenre}</Card.Title>
                        <Card.Title>Price: {location.state.bookPrice}</Card.Title>
                        <Card.Title>Pages: {location.state.bookPages}</Card.Title>
                        <Card.Title>Description: {location.state.bookDescription}</Card.Title>
                        <Card.Title>Author: {location.state.bookAuthor}</Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default BookDetails