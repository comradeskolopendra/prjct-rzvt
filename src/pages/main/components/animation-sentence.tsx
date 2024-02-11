import styled, { keyframes } from "styled-components"

const AnimateSentence = keyframes`
  0% {
    width: 0%;
  }

  25% {
    width: 100%;
  }

  50% {
    width: 100%;
  }

  80% {
    width: 0%;
  }

  100% {
    width: 0%;
  }
`

export const AnimationSentence = styled.span`
  font-style: italic;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background: white;
    animation-name: ${AnimateSentence};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: 1s;
  }
`