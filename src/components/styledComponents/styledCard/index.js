import styled from 'styled-components'

export const StyledCardContainer = styled.div`
    width: 60%;
    display: flex;
    min-height: 60vh;
    gap: 2rem;

    @media (max-width: 500px){
       flex-direction: column;
    }
`;

export const StyledCardImage = styled.div`
    width: 50%;
`;

export const StyledCardDetailsContainer = styled.div`
    width: 50%;
`;

export const StyledCardDetialsTitle = styled.div`
    font-size: 1rem;
`;

export const StyledCardDetialsContent = styled.div`
    font-size: 1.6rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const StyledCardDetailsRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`