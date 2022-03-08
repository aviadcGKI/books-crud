import React ,{useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import NumberSelector from 'components/selector/numberSelector';
import { DateSelector } from 'components/selector';
import { StyledSpinner } from 'components/styledComponents';

function CreateBook() {

    const [bookTitle,setBookTitle] = useState('');
    const [bookGenre,setBookGenre] = useState('');
    const [bookPages,setBookPages] = useState(0);
    const [bookPrice,setBookPrice] = useState('');
    const [bookDatePublished,setBookDatePublished] = useState(null);
    const [bookImage,setBookImage] = useState(null);

    const [isLoading,setIsLoading] = useState();

    return (
        <>
            <h2>Add Book</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter Title" onChange={(e)=>setBookTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>genre</Form.Label>
                    <Form.Control placeholder="Enter genre" onChange={(e)=>setBookGenre(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>pages</Form.Label>
                    <NumberSelector size={500} setNumber={setBookPages} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>price</Form.Label>
                    <Form.Control placeholder="Enter Price" onChange={(e)=>setBookPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>date published</Form.Label>
                    <DateSelector />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3" >
                    <Form.Label>Add an image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {isLoading && <StyledSpinner />}
            </Form>
        </>
    )
}

export default CreateBook