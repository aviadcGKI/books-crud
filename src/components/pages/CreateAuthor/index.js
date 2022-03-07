import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import { storage, db } from 'db'
import CountrySelector from 'components/selector/countrySelector';
import NumberSelector from 'components/selector/numberSelector';
import { StyledSpinner } from 'components/styledComponents';

function CreateAuthor() {
    const [authorName, setAuthorName] = useState('');
    const [authorAge, setAuthorAge] = useState('');
    const [authorCountry, setAuthorCountry] = useState('');
    const [authorImage, setAuthorImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    //ref
    const authorNameRef = useRef(); 
    const authorAgeRef = useRef(); 
    const authorCountryRef = useRef(); 
    const authorimageRef = useRef(); 

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
            resetInputFields();
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

    const resetInputFields = ()=>{
        authorNameRef.current.value = "";
        authorAgeRef.current.selectOption('');
        authorCountryRef.current.selectOption('');
        authorimageRef.current.value = null;
    }

    return (
        <>
            <h2>Add Author</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setAuthorName(e.target.value)} ref={authorNameRef} />
                    {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author Age</Form.Label>
                    <NumberSelector setAge={setAuthorAge} ref={authorAgeRef} size={120} />
                    {/* <Form.Control type="text" placeholder="Enter email" /> */}
                    {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Author Country</Form.Label>
                    {/* <Form.Control type="text" placeholder="Password" /> */}
                    <CountrySelector setCountry={setAuthorCountry} ref={authorCountryRef} />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3" onChange={handleImageChange}>
                    <Form.Label>Add an image</Form.Label>
                    <Form.Control type="file" ref={authorimageRef} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            {isLoading && <StyledSpinner />}
        </>
    )
}

export default CreateAuthor