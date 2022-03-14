import React, { useState } from 'react'
import { Form, Button, Row } from 'react-bootstrap';
import { StyledSpinner } from 'components/styledComponents';
import { storage, db } from 'db'
import firebase from "firebase/app";
import { useLocation } from "react-router-dom";
import Container from 'components/styledComponents/styledContainer';
import { Input, TextArea, DatePicker, FileUpload } from 'components/formItems';

function CreateBook() {
    const [bookImage, setBookImage] = useState(null);
    const [isLoading, setIsLoading] = useState();
    const [bookData, setBookData] = useState({ title: '', genre: '', pages: '', price: '', description: '', datePublished: ''});

    const location = useLocation();

    //get the authors collection
    const authorsCollectionRef = db.collection("authors");
    const booksCollectionRef = db.collection("books");

    const handleImageChange = (e) => {
        setBookImage(e.target.files[0]);
    }

    const handleDateChange = (date) => {
        setBookData({ ...bookData, datePublished: date });
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
                ...bookData,
                imageUrl: bookImageUrl,
                author: authorId,
                isActive: true
            }
            const newBookData = await booksCollectionRef.add(book);
            authorsCollectionRef.doc(authorId).update({
                books: firebase.firestore.FieldValue.arrayUnion(newBookData.id)
            });
            console.log(book);
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
        setBookData({ ...bookData, [name]: value });
    }

    return (
        <Container justify='center'>
            <h2>Add Book</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="g-2">
                    {/* <CustomColum name={name} handleChange={handleChange} placeHolder="Enter Title" */}
                    <Input type='text' name='title' placeholder='Enter Title' onChange={handleChange} />
                    <Input type='text' name='genre' placeholder='Enter Genre' onChange={handleChange} />
                </Row>
                <Row className="g-2">
                    <Input type='number' name='pages' placeholder='Enter Pages' onChange={handleChange} />
                    <Input type='number' name='price' placeholder='Enter Price' onChange={handleChange} />
                </Row>
                <TextArea name='description' rows='3' placeholder='Enter Description' onChange={handleChange} />
                <Row className="g-2">
                    <DatePicker onChange={handleDateChange} />
                    <FileUpload name='file' onChange={handleImageChange} />
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