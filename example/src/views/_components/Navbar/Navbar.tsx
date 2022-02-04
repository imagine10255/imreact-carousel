import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components/macro';
import {useHistory} from 'react-router-dom';
import {Container, media} from 'bear-styled-grid';
import {githubUrl} from 'config/app';
import {Icon} from 'bear-components/atoms';

// Components
import HamburgerMenu from 'components/atoms/HamburgerMenu';
import Logo from 'components/atoms/Logo';
import {useSidebar} from 'provider/SidebarProvider';
import LanguagePicker from '../LanguagePicker';


const Navbar = () => {
    const {isExpend, toggleExpend} = useSidebar();
    const history = useHistory();

    useEffect(() => {
        window.addEventListener('resize', onResize, true);

        onResize();
    }, []);


    /**
     * 顯示尺寸方便除錯
     */
    const onResize = useCallback(() => {
        const dom = document.getElementById('debug-resize');
        if(dom){
            dom.innerHTML = `${window.innerWidth}px`;
        }
    }, []);

    return <Nav>
        <Container className="d-flex align-items-center" fluid>

            <NavbarMenu className="d-lg-none flex-grow-1 d-flex ">
                <HamburgerMenu
                    isExpend={isExpend} toggleExpend={() => toggleExpend()}/>
            </NavbarMenu>


            <NavbarBrand onClick={()=>history.push('/')}>
                <Logo/>
                <Name>Bear Carousel</Name>
            </NavbarBrand>

            <NavbarNav className="ml-auto my-0 d-none d-sm-flex">

                <NavItem className="d-none d-sm-flex">
                    <NavLink href="#!" isActive>Docs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={githubUrl} target="_blank">
                        GitHub
                        <Icon code="open" color="inherit" size={23} style={{float: 'right'}}/>
                    </NavLink>
                </NavItem>
                <NavItem className="d-none d-sm-flex">
                    <LanguagePicker/>
                </NavItem>
            </NavbarNav>

            <DebugSize id="debug-resize"/>
        </Container>
    </Nav>;
};

export default Navbar;

const Name = styled.div`
  
`;

const DebugSize = styled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
  padding-right: 1rem;
  color: ${props => props.theme.primaryColor};
  z-index: 1;
  font-size: 11px;
`;


const NavLink = styled.a<{
  isActive?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  color: ${props => props.isActive ? '#fff' : 'rgba(255, 255, 255, 0.55)'};
  
  :hover{ 
    color: #fff;
  }
`;


const NavbarMenu = styled.div`
  display: flex;
  flex: 1;
`;

const NavItem = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: 1rem;
`;

const NavbarNav = styled.ul`
   flex: 1;
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
`;

const NavbarBrand = styled.div`
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 0;
    white-space: nowrap;
    
    font-weight: 700;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    ${media.sm`
        margin-right: 1rem;
    `}
    
`;


const Nav = styled.nav`
   background-color: #242526;
   color: #fff;
   
     flex-wrap: nowrap;
    justify-content: flex-start;
    
    display: flex;
    align-items: center;
    height: 63.75px;
    
    position: sticky;
    top: 0;
    z-index: ${props => props.theme.navbarZIndex};
`;
