import React ,{useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import NumberSelector from 'components/selector/numberSelector';
import { DateSelector } from 'components/selector';
import { StyledSpinner } from 'components/styledComponents';

function CreateBook() {

    const [isLoading,setIsLoading] = useState();

    return (
        <>
            <h2>Add Book</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>genre</Form.Label>
                    <Form.Control placeholder="Enter genre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>pages</Form.Label>
                    <NumberSelector size={2000} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>price</Form.Label>
                    <Form.Control placeholder="Enter Price" />
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