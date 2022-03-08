import React ,{useEffect} from 'react'
import { StyledBooksNavbar } from 'components/styledComponents'
import Select from 'react-select'
import { Button } from 'react-bootstrap';

function BooksNavbar(props) {

    return (
        <>
            <StyledBooksNavbar>
                <Button>show all</Button>
                <Select options={props.authorsList || []} defaultValue='select author' />
            </StyledBooksNavbar>
        </>
    )
}

export default BooksNavbar