import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CustomLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 200;
    font-size: 20px;
    margin: 0 15px;
    position: relative;
    z-index: 1;

    &::after {
        content: "";
        width: 0%;
        position: absolute;
        transition: all 0.3s linear;
        bottom: -5px;
        height: 1px;
        left: 0;
    }

    &:hover {
        &::after {
            width: 100%;
            background-color: white;
            height: 1px;
            transition: all 0.3s ease-in-out;
        }
    }
`