import React, { useEffect } from 'react'
import { StyledBooksNavbar } from 'components/styledComponents'
import Select from 'react-select'
import { Button } from 'react-bootstrap';

function BooksNavbar(props) {

    const handleChange = (value) => {
        props.setSelectedAuthor(value.value);
    }

    const handleClick = () => {
        props.setSelectedAuthor(null);
    }

    return (
        <>
            <StyledBooksNavbar>
                <Button onClick={handleClick}>show all books</Button>
                <div style={{width: '10rem'}}>
                    <Select options={props.authorsList || []} defaultValue='select author' onChange={handleChange} />
                </div>
            </StyledBooksNavbar>
        </>
    )
}

export default BooksNavbar