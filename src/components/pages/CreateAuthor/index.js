import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import { storage, db } from 'db'
import CountrySelector from 'components/selector/countrySelector';
import AgeSelector from 'components/selector/ageSelector';
import { StyledSpinner } from 'components/styledComponents';
import Container from 'components/styledComponents/styledContainer';

function CreateAuthor() {
    const [authorName, setAuthorName] = useState('');
    const [authorAge, setAuthorAge] = useState('');
    const [authorCountry, setAuthorCountry] = useState('');
    const [authorImage, setAuthorImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    //ref
    const authorAgeRef = useRef();
    const authorCountryRef = useRef();

    //get the authors collection
    const authorsCollectionRef = db.collection("authors");

    const handleImageChange = (e) => {
        setAuthorImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const authorImageUrl = await handleImageUpload(authorImage);
            console.log(authorImageUrl);
            const author = {
                name: authorName,
                age: authorAge,
                country: authorCountry,
                imageUrl: authorImageUrl,
                isActive: true
            }
            const data = await authorsCollectionRef.add(author);
            console.log(data);
            resetSelectFields();
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

    const resetSelectFields = () => {
        authorAgeRef.current.selectOption('');
        authorCountryRef.current.selectOption('');
    }

    return (
        <>
            <Container justify='center'>
                <h2>Add Author</h2>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setAuthorName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author Age</Form.Label>
                        <AgeSelector setNumber={setAuthorAge} ref={authorAgeRef} size={120} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Author Country</Form.Label>
                        <CountrySelector setCountry={setAuthorCountry} ref={authorCountryRef} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3" >
                        <Form.Label>Add an image</Form.Label>
                        <Form.Control type="file" onChange={handleImageChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
                {isLoading && <StyledSpinner />}
            </Container>
        </>
    )
}

export default CreateAuthor