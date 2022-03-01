import React , {useState} from 'react'
import { NavbarContainer, LeftNavbarContainer, RightNavbarContainer
,NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer
,NavbarLink, NavbarLinkExtended , LogoContainer, OpenLinksButton } from '../styledComponents/styledNavbar'
import logo from '../../components/assets/images/logo.jpg'

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
                <NavbarLinkExtended to='/' onClick={()=>setExstendNavbar((currentValue)=>!currentValue)}>Home</NavbarLinkExtended>
                <NavbarLinkExtended to='/author' onClick={()=>setExstendNavbar((currentValue)=>!currentValue)}>Author</NavbarLinkExtended>
                <NavbarLinkExtended to='/books' onClick={()=>setExstendNavbar((currentValue)=>!currentValue)}>Books</NavbarLinkExtended>
            </NavbarExtendedContainer>}
        </NavbarContainer>
      </>
  )
}

export default Navbar