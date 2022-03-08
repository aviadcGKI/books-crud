import React, { useState } from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { DateSelector } from 'components/selector';
import { StyledSpinner } from 'components/styledComponents';
import { storage, db } from 'db'
import { useLocation } from "react-router-dom";

function CreateBook() {
    const [bookTitle, setBookTitle] = useState('');
    const [bookGenre, setBookGenre] = useState('');
    const [bookPages, setBookPages] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [bookDatePublished, setBookDatePublished] = useState(null);
    const [bookImage, setBookImage] = useState(null);
    const [isLoading, setIsLoading] = useState();

    const location = useLocation();

    //get the authors collection
    const authorsCollectionRef = db.collection("authors");
    const booksCollectionRef = db.collection("books");

    const handleImageChange = (e) => {
        setBookImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            // const bookImageUrl = await handleImageUpload(bookImage);
            // console.log(bookImageUrl);
            console.log(location,"author id");
            const book = {
                title: bookTitle,
                genre: bookGenre,
                pages: bookPages,
                price: bookPrice,
                description: bookDescription,
                datePublished: bookDatePublished,
                // imageUrl: bookImageUrl,
                // author: location.state.authorId,
                isActive: true
            }
            const data = await booksCollectionRef.add(book);
            console.log(data,"book created");
            e.target.reset();
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.log(e)
        }
    }

    const handleImageUpload = async (image) => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(image.name);
        await fileRef.put(image);
        return await fileRef.getDownloadURL();
    }

    return (
        <>
            <h2>Add Book</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="g-2">
                    <Col md>
                        <Form.Label>Title</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Enter title">
                            <Form.Control placeholder="Enter Title" onChange={(e) => setBookTitle(e.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <Form.Label>genre</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Enter genre">
                            <Form.Control placeholder="Enter genre" onChange={(e) => setBookGenre(e.target.value)} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2">
                    <Col md>
                        <Form.Label>pages</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Enter pages">
                            <Form.Control placeholder="Enter pages" onChange={(e) => setBookPages(e.target.value)} />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <Form.Label>price</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" label="Enter price">
                            <Form.Control placeholder="Enter Price" onChange={(e) => setBookPrice(e.target.value)} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={(e) => setBookDescription(e.target.value)} />
                </Form.Group>
                <Row className="g-2">
                    <Col md>
                        <Form.Label>date published</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" >
                            <DateSelector setDatePublished={setBookDatePublished} />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <Form.Label>Add an image</Form.Label>
                        <FloatingLabel controlId="floatingInputGrid" >
                            <Form.Control type="file" onChange={handleImageChange} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {isLoading && <StyledSpinner />}
            </Form>
        </>
    )
}

export default CreateBook