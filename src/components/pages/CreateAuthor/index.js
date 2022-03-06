import React ,{useState} from 'react'
import { Form,Button} from 'react-bootstrap';
import {storage} from 'db'
import CountrySelector from 'components/CountrySelector';

function CreateAuthor() {
    const [authorName, setAuthorName] = useState('');
    const [authorAge, setAuthorAge] = useState('');
    const [authorCountry, setAuthorCountry] = useState('');
    const [authorImage, setAuthorImage] = useState(null);

    const handleImageChange = (e) =>{
       setAuthorImage(e.target.files[0]);
    }

    const handleImageUpload = ()=>{
        const uploadTask = storage.ref(`images/${authorImage.name}`).put(authorImage);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(authorImage.name)
                .getDownloadURL()
                .then(url => {
                  console.log(url);
                });
            }
          );
    }


  return (
    <>
        <h2>Add Author</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author Age</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Author Country</Form.Label>
                {/* <Form.Control type="text" placeholder="Password" /> */}
                <CountrySelector setCountry = {setAuthorCountry} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3" onChange={handleImageChange}>
                <Form.Label>Add an image</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <Button onClick={handleImageUpload}>check the image</Button>
    </>
  )
}

export default CreateAuthor