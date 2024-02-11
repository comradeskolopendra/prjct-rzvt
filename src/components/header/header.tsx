import { FC } from "react";
import styled from "styled-components";
import { CustomLink } from "../link/link";

interface IHeaderProps {
    links: {
        title: string;
        to: string;
    }[]
}

const Nav = styled.nav`    
    display: flex;
    justify-content: flex-end;
    max-width: 1024px;
    margin: 0 auto;
`

const StyledHeader = styled.header`
    width: 100%;
    padding: 20px 0;
    background: rgba(0,0,0,.5);
    box-shadow: 0px 17px 27px 10px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid hsla(0,0%,100%,.2);
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 2;
`

const Header: FC<IHeaderProps> = ({ links }) => {
    return (
        <StyledHeader>
            <Nav>
                {
                    links.map(link => (
                        <CustomLink key={link.to} to={link.to}>
                            {link.title}
                        </CustomLink>
                    ))
                }
            </Nav>
        </StyledHeader>
    )
}

export default Header;