import React , {useState} from 'react'
import { NavbarContainer, LeftNavbarContainer, RightNavbarContainer
,NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer
,NavbarLink, NavbarLinkExtended , LogoContainer, OpenLinksButton } from './styledComponents/Navbar.styled'
import logo from '../images/logo.jpg'

function Navbar() {

    const [extendNavbar, setExstendNavbar] = useState(false);

  return (
      <>
        <NavbarContainer extendNavbar = {extendNavbar}>
            <NavbarInnerContainer>
                <LeftNavbarContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Home</NavbarLink>
                        <NavbarLink to='/author'>Author</NavbarLink>
                        <NavbarLink to='/books'>Books</NavbarLink>
                        <OpenLinksButton onClick={()=>setExstendNavbar((currentValue)=>!currentValue)}>
                           {extendNavbar? <>&#x2715;</> : <>&#8801;</>} </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftNavbarContainer>
                <RightNavbarContainer>
                    <LogoContainer src={logo}></LogoContainer>
                </RightNavbarContainer>
            </NavbarInnerContainer>
            {extendNavbar &&
            <NavbarExtendedContainer>
                <NavbarLinkExtended to='/'>Home</NavbarLinkExtended>
                <NavbarLinkExtended to='/author'>Author</NavbarLinkExtended>
                <NavbarLinkExtended to='/books'>Books</NavbarLinkExtended>
            </NavbarExtendedContainer>}
        </NavbarContainer>
      </>
  )
}

export default Navbar