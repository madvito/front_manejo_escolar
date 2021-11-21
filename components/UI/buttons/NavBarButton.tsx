import { StyledNavBarButton } from "./Buttons";
import Link from 'next/link';

interface Props {
    text: string;
    url: string;
}
const NavbarButton = ({text, url}: Props) => {
    return (
        <Link href={url}>
            <StyledNavBarButton>
                {text}
            </StyledNavBarButton>
        </Link>
    )
}

export default NavbarButton;
