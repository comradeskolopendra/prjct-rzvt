import styled, { keyframes } from "styled-components";

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

const SelectSentence = styled.span`
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

const TitleMain = styled.h1`
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 64px;
  font-weight: 200;
  margin-bottom: 15px;
  margin-top: 125px;
`

const SubtitleMain = styled.p`
  color: white;
  font-size: 26px;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  max-width: 540px;
  margin-top: 0;
  margin-bottom: 15px;
`

const SubtitleAbout = styled(SubtitleMain)`
  font-weight: 300;
  font-size: 20px;
  opacity: 0.75;
  transition: opacity 0.3s ease-in-out;
  max-width: 510px;
  margin-bottom: 0;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`

const MainPage = () => {

  return (
    <section>
      <TitleMain>
        Сбер.Соц
      </TitleMain>
      <SubtitleMain>
        Поделись знаниями с ближним своим!
      </SubtitleMain>
      <SubtitleAbout>
        Здесь Вы можете <SelectSentence>делится</SelectSentence> образовательными ресурсами, видеороликами, анализомами и многим другим
      </SubtitleAbout>
    </section >
  )
};

export default MainPage;