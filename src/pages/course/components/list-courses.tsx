import styled from "styled-components";

export const ListCourses = styled.ul`
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    max-width: 1024px;
    margin: 0 auto;

    & h1, & p, & a {
        text-decoration: none;
    }

    &:first-child {
        margin-top: 45px;
    }
`