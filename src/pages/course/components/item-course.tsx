import styled from "styled-components";

export const ItemCourse = styled.li`
    font-family: "Calibri", sans-serif;
    background: #1c1c21;
    margin-bottom: 15px;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
    color: white;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        background: #69697c;
        transition: all 0.3s ease-in-out;
        transform: scale(1.03);
    }
`