import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CustomNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    margin: 0 15px;
    position: relative;

    &::after {
        content: "";
        width: 0px;
        position: absolute;
        transition: width 0.3s linear;
        bottom: -5px;
        left: 0;
    }

    &:hover {
        &::after {
            width: 100%;
            background-color: white;
            height: 2px;
            transition: width 0.3s ease-in-out;
        }
    }
`