import styled from 'styled-components';

export default styled.nav`
    width: 100% ;
    margin-top: 0.5rem;
    /* border: 1px solid black; */
    height: 6vh ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    gap: 1rem;

    @media (max-width: 500px){
       flex-direction: column;
       height: 30vh;
    }
`