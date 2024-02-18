import { FC } from "react";
import { StyledHeader, HeaderNav } from "./components";
import logo from "../../assets/images/logo.jpg";
import { CustomLink } from "../link/link";

interface IHeaderProps {
    links: {
        title: string;
        to: string;
    }[]
}

const Header: FC<IHeaderProps> = ({ links }) => {
    return (
        <StyledHeader>
            <HeaderNav>
                {
                    links.map(link => (
                        <CustomLink key={link.to} to={link.to}>
                            {link.title}
                        </CustomLink>
                    ))
                }
            </HeaderNav>
        </StyledHeader >
    )
}

export default Header;