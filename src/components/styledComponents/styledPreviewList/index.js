import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledPreviewList = styled(Link)`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    text-align: center;
    text-decoration: none;
    color: #000;

    &:hover{
        cursor: pointer;
        transform: scale(0.98);
    }
`;

export default StyledPreviewList