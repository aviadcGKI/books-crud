import Select from 'react-select'
import { Button } from 'react-bootstrap';
import { StyledBooksNavbar } from 'components/styledComponents';

import { Form } from 'react-bootstrap'
import { useState } from 'react';
// import { Input} from 'components/formItems';


const BooksNavbar = (props) => {

    const [pages,setPages] = useState(0);

    const handleSelectAuthorChange = (value) => {
        props.handleSelectedAuthor(value.value);
    }

    const handleClickShowAllBooks = () => {
        props.handleSelectedAuthor(null);
    }

    const handleClickInputPages = () => {
        props.handleGetBooksByPages(pages)
    }

    return (
        <>
            <StyledBooksNavbar>
                <Form.Control type="number" placeholder="enter pages" name="enter pages" style={{ width: '10rem' }} onChange={(e)=>setPages(Number(e.target.value))} />
                <Button onClick={handleClickInputPages}>submit</Button>
                <div style={{ width: '10rem' }}>
                    <Select options={props.authorsList || []} defaultValue='select author' onChange={handleSelectAuthorChange} />
                </div>
                <Button onClick={handleClickShowAllBooks}>show all books</Button>
                {/* <Button onClick={handleInputPages}>check serverless</Button> */}
            </StyledBooksNavbar>
        </>
    )
}

export default BooksNavbar