import { FC } from "react";
import styled from "styled-components";

const AboutSection = styled.section`
    margin: 50px auto;
    max-width: 1024px;
    display: flex;
    justify-content: flex-start;
`

const Question = styled.h3`
    font-size: 36px;
    color: white;
    font-family: "Open Sans", sans-serif;
`

const AboutProject: FC = () => {

    return (
        <AboutSection>
            <Question>
                Что это за проект?
            </Question>
        </AboutSection>
    )
};

export default AboutProject;