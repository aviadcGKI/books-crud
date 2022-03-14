import { StyledBooksNavbar } from 'components/styledComponents'
import Select from 'react-select'
import { Button } from 'react-bootstrap';

function BooksNavbar(props) {

    const handleChange = (value) => {
        props.handleSelectedAuthor(value.value);
    }

    const handleClick = () => {
        props.handleSelectedAuthor(null);
    }

    return (
        <>
            <StyledBooksNavbar>
                {console.log(props.authorsList)}
                <Button onClick={handleClick}>show all books</Button>
                <div style={{width: '10rem'}}>
                    <Select options={props.authorsList || []} defaultValue='select author' onChange={handleChange} />
                </div>
            </StyledBooksNavbar>
        </>
    )
}

export default BooksNavbar