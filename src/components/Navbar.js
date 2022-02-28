import React from 'react'
import { NavbarContainer, LeftNavbarContainer, RightNavbarContainer
,NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer
,NavbarLink, LogoContainer } from './styledComponents/Navbar.styled'
import logo from '../images/logo.jpg'

function Navbar() {
  return (
      <>
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftNavbarContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Home</NavbarLink>
                        <NavbarLink to='/author'>Author</NavbarLink>
                        <NavbarLink to='/books'>Books</NavbarLink>
                    </NavbarLinkContainer>
                </LeftNavbarContainer>
                <RightNavbarContainer>
                    <LogoContainer src={logo}></LogoContainer>
                </RightNavbarContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer>

            </NavbarExtendedContainer>
        </NavbarContainer>
      </>
  )
}

export default Navbar