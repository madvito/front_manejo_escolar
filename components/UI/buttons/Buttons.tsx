import styled from 'styled-components';

export const StyledDefaultButton = styled.button`
border-radius: 8px;
padding: 1rem 2rem;
font-size: 1.2rem;
`;

export const StyledDefaultLink = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
`;

export const StyledNavBarButton = styled(StyledDefaultLink)`
    border-radius: 8px;
    padding: 1rem 2rem;
    color: #FFFFFF;
    font-weight: 700;
    background-color: #C06014;
    cursor: pointer;
    width: 100%;
    text-align: center;
    @media screen and (min-width: 640px) {
        width: auto;
    }
`;