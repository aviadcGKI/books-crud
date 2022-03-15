import Select from 'react-select'
import { Button } from 'react-bootstrap';
import { StyledBooksNavbar } from 'components/styledComponents';
import { Input} from 'components/formItems';


const BooksNavbar = (props) => {

    const handleChange = (value) => {
        props.handleSelectedAuthor(value.value);
    }

    const handleClick = () => {
        props.handleSelectedAuthor(null);
    }

    return (
        <>
            <StyledBooksNavbar>
               {/* <input placeholder='serach by pages' />
                <Button>submit</Button> */}
                <div style={{width: '10rem'}}>
                     <Select options={props.authorsList || []} defaultValue='select author' onChange={handleChange} />
                </div>
                <Button onClick={handleClick}>show all books</Button>
            </StyledBooksNavbar>
        </>
    )
}

export default BooksNavbar