import React from 'react'
import { StyledBooksNavbar } from 'components/styledComponents'
import {Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const BackNavbar = () => {

    const history = useHistory()


    const handleBack = ()=>{
        history.push('/books');
    }
  return (
    <StyledBooksNavbar>
        <Button onClick={handleBack}>back</Button>
    </StyledBooksNavbar>
  )
}

export default BackNavbar