import styled from 'styled-components';

export default styled.div`
    height: 80vh;
    display: flex;
    justify-content: ${props=>props.justify};
    align-items: center;
    flex-direction: column;
    margin-top: ${props=>props.marginTop} ;
    /* border: 1px solid green ; */
`;
