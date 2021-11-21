import styled from 'styled-components';
import Navbar from "./NavBar";

interface Props {
    children: any;
    logged?: boolean;
    accountType?: string;
}
const Layout = ({children}: Props) => {
    
    return(
        <StyledLayout>
            <Navbar />
            <div>{children}</div>
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
    // margin: 0.3rem;
    background-color: #CDCDCD;
    height: 100%;
    padding: 1rem
`;


export default Layout;