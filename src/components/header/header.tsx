import { FC } from "react";
import styled from "styled-components";
import { CustomNavLink } from "./link";

interface IHeaderProps {
    links: {
        title: string;
        href: string;
    }[]
}

const Nav = styled.nav`
    width: 100vw;
    height: 65px;
    background: black;
    opacity: 0.05;
`

const Header: FC<IHeaderProps> = ({ links }) => {
    return (
        <Nav>
            {
                links.map(link => (
                    <CustomNavLink to={link.href}>
                        {link.title}
                    </CustomNavLink>
                ))
            }
        </Nav>
    )
}

export default Header;