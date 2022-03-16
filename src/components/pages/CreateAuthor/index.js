import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap';
import { storage, db } from 'db'
import { StyledSpinner } from 'components/styledComponents';
import Container from 'components/styledComponents/styledContainer';
import { Input, FileUpload } from 'components/formItems';
import { CountryPicker } from 'components/formItems/CountryPicker';
// import { AgePicker } from 'components/formItems/AgePicker';

function CreateAuthor() {

    const [authorImage, setAuthorImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [authorData, setAuthorData] = useState({ name: '', age: '', country: '', })

    //ref
    // const authorAgeRef = useRef();
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
                ...authorData,
                imageUrl: authorImageUrl,
                isActive: true,
                books: []
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
        // authorAgeRef.current.selectOption('');
        authorCountryRef.current.selectOption('');
    }

    const handleDataChange = ({ target }) => {
        const { name, value } = target;
        setAuthorData({ ...authorData, [name]: value })
    }

    const handleSelcetChange = ({ name, value }) => {
        setAuthorData({ ...authorData, [name]: value })
    }

    return (
        <>
            <Container justify='center'>
                <h2>Add Author</h2>
                <Form onSubmit={handleSubmit} >
                    <Input type='text' name='name' placeholder='Enter Name' onChange={handleDataChange} />
                    <Input type='number' name='age' placeholder='Enter Age' onChange={handleDataChange} />
                    {/* <AgePicker onChange={handleSelcetChange} ref={authorAgeRef} /> */}
                    <CountryPicker onChange={handleSelcetChange} ref={authorCountryRef} />
                    <FileUpload name='file' onChange={handleImageChange} />
                    <Button variant="primary" type="submit" style={{ marginTop: '1rem' }} >
                        Submit
                    </Button>
                </Form>
                {isLoading && <StyledSpinner />}
            </Container>
        </>
    )
}

export default CreateAuthor