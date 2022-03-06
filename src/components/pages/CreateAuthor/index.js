import React from 'react'
import { Form,Button} from 'react-bootstrap';

function CreateAuthor() {
  return (
    <>
        <h2>Add Author</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author Age</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Author State</Form.Label>
                <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
  )
}

export default CreateAuthor