import { useLocation } from "react-router-dom";
import {
    StyledCardContainer, StyledCardImage, StyledCardDetailsContainer, StyledCardDetialsTitle,
    StyledCardDetialsContent
} from 'components/styledComponents/styledCard';
import Container from 'components/styledComponents/styledContainer'

function BookDetails() {

    const location = useLocation()


    return (
        <Container justify='center'>
            <StyledCardContainer>
                <StyledCardImage> <img src={location.state.imageUrl} width="100%" height="100%" alt='book'/> </StyledCardImage>
                <StyledCardDetailsContainer>
                    <StyledCardDetialsTitle> Title:</StyledCardDetialsTitle>
                    <StyledCardDetialsContent> {location.state.bookTitle} </StyledCardDetialsContent>
                    <StyledCardDetialsTitle> Genre:</StyledCardDetialsTitle>
                    <StyledCardDetialsContent> {location.state.bookGenre} </StyledCardDetialsContent>
                    <StyledCardDetialsTitle> Pages:</StyledCardDetialsTitle>
                    <StyledCardDetialsContent> {location.state.bookPages} </StyledCardDetialsContent>
                    <StyledCardDetialsTitle> Price:</StyledCardDetialsTitle>
                    <StyledCardDetialsContent> {location.state.bookPrice} </StyledCardDetialsContent>
                    <StyledCardDetialsTitle> Author:</StyledCardDetialsTitle>
                    <StyledCardDetialsContent> {location.state.bookAuthor} </StyledCardDetialsContent>
                </StyledCardDetailsContainer>
            </StyledCardContainer>
        </Container>

    )


}

export default BookDetails