import styled from "styled-components";


const StyledPreviewList = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    text-align: center;

    &:hover{
        cursor: pointer;
        transform: scale(0.98);
    }
`;

export default StyledPreviewList