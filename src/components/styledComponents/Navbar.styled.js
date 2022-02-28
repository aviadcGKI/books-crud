import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 9vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
`;

export const LeftNavbarContainer = styled.div`
    display: flex;
    flex: 70%;
    align-items: center;
`;


export const RightNavbarContainer = styled.div`
    display: flex;
    flex: 30%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.5rem;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    gap: 1rem;
    /* flex-wrap: wrap; */
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: 2rem;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;

    &:hover{
        transform: scale(1.02);
    }
`;

export const LogoContainer = styled.img`
    max-width: 180px;
    height: 100%;
`

export const NavbarExtendedContainer = styled.div``;


