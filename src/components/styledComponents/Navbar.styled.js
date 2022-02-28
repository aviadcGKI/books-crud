import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${({extendNavbar})=> extendNavbar? "100vh" : "9vh"};
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    @media (min-width: 500px){
        height: 9vh;
    }
`;

export const LeftNavbarContainer = styled.div`
    display: flex;
    flex: 70%;
    padding-top: 0.5rem;
    align-items: flex-start;
    text-align: center;
`;


export const RightNavbarContainer = styled.div`
    display: flex;
    flex: 30%;
    align-items: flex-start;
    justify-content: flex-end;
    padding-right: 0.5rem;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 9vh;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
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

    @media(max-width: 500px){
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
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
    height: 9vh;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    align-items: flex-start;

    &:hover{
        transform: scale(1.08);
    }

    @media(min-width: 500px){
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    @media(min-width: 500px){
        display: none;
    }
`;


