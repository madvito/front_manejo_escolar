import styled from 'styled-components';
import { StyledNavBarButton } from './UI/buttons/Buttons';
import NavbarButton from './UI/buttons/NavBarButton';

const navBarItems = [
    {
        text: 'Inicio',
        url: '/',
    },
    {
        text: 'Cursos',
        url: '/curso'
    },
    {
        text: 'Perfil',
        url: '/perfil'
    },
]

const Navbar = () => {
    const printNavBarItems = () => {
        return navBarItems.map((item) => <NavbarButton key={`navButton_${item.text}`} text={item.text} url={item.url} />)
    }
    return (
        <NavBarContainer>
            {printNavBarItems()}
        </NavBarContainer>
    )
}

export default Navbar;

const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    // margin: 0 1rem 0.5rem;
    @media screen and (min-width: 640px) {
        flex-direction: row;
        
    }
`;