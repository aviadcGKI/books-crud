import React, { useState } from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { DateSelector } from 'components/selector';
import { StyledSpinner } from 'components/styledComponents';
import { storage, db } from 'db'
import firebase from "firebase/app";
import { useLocation } from "react-router-dom";
import Container from 'components/styledComponents/styledContainer';

function CreateBook() {
    const [bookTitle, setBookTitle] = useState('');
    const [bookGenre, setBookGenre] = useState('');
    const [bookPages, setBookPages] = useState('');
    const [bookPrice, setBookPrice] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [bookDatePublished, setBookDatePublished] = useState(null);
    const [bookImage, setBookImage] = useState(null);
    const [isLoading, setIsLoading] = useState();

    const [bookData, setBookData] = useState({ title: '', genre: '', pages: '' });

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
            const authorId = location.state.authorId;
            const bookImageUrl = await handleImageUpload(bookImage);
            console.log(bookImageUrl);
            console.log(location, "author id");
            const book = {
                title: bookTitle,
                genre: bookGenre,
                pages: bookPages,
                price: bookPrice,
                description: bookDescription,
                datePublished: bookDatePublished,
                imageUrl: bookImageUrl,
                author: authorId,
                isActive: true
            }
            const newBookData = await booksCollectionRef.add(book);
            authorsCollectionRef.doc(authorId).update({
                books: firebase.firestore.FieldValue.arrayUnion(newBookData.id)
            });
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

    const handleChange = ({ target }) => {
        const { name, value } = target;
        console.log(name, value);
        setBookData({ ...bookData, [name]: value });

    }

    return (
        <Container justify='center'>
            <h2>Add Book</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="g-2">
                    {/* <CustomColum name={name} handleChange={handleChange} placeHolder="Enter Title" */}
                    <Col md>
                        <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Enter Title" name="title" onChange={handleChange} />
                    </Col>
                    <Col md>
                        <Form.Label>genre</Form.Label>
                            <Form.Control placeholder="Enter genre" onChange={(e) => setBookGenre(e.target.value)} />
                    </Col>
                </Row>
                <Row className="g-2">
                    <Col md>
                        <Form.Label>pages</Form.Label>
                            <Form.Control placeholder="Enter pages" onChange={(e) => setBookPages(e.target.value)} />
                    </Col>
                    <Col md>
                        <Form.Label>price</Form.Label>
                            <Form.Control placeholder="Enter Price" onChange={(e) => setBookPrice(e.target.value)} />
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={(e) => setBookDescription(e.target.value)} />
                </Form.Group>
                <Row className="g-2">
                    <Col md>
                        <Form.Label>date published</Form.Label>
                            <DateSelector setDatePublished={setBookDatePublished} />
                    </Col>
                    <Col md>
                        <Form.Label>Add an image</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {isLoading && <StyledSpinner />}
            </Form>
        </Container>
    )
}

export default CreateBook