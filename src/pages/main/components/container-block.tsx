import styled from "styled-components";

export const ContainerBlock = styled.div<{ $randomColor: string }>`
    width: 250px;
    height: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1c1c21;
    border-radius: 12px;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
        background: #69697c;

        svg {
            color: ${props => props.$randomColor};

            rect {
                stroke: ${props => props.$randomColor};
            }
        }
    }

    &:active {
        background: #a5a5c2;
    }
`