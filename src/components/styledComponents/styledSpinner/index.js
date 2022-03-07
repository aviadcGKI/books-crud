import styled from "styled-components";

const StyledSpinner = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top: 10px solid #FECD05;
    background-color: #000;
    animation: spin 0.7s infinite linear;

    @keyframes spin {
        100%{
            transform: rotate(360deg);
        }
    }
`

export default StyledSpinner