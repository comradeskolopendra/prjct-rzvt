import styled from "styled-components";

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
  font-size: 24px;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  max-width: 540px;
  margin-top: 0;
`

const SubtitleAbout = styled(SubtitleMain)`
  font-weight: 300
`

const MainPage = () => {

  return (
    <section>
      <TitleMain>
        Сбер.Соц
      </TitleMain>
      <SubtitleMain>
        <span style={{
          marginBottom: "15px",
          fontWeight: "500"
        }}>
          Поделись знаниями с ближним своим!
        </span>
      </SubtitleMain>
      <SubtitleAbout>
        Здесь Вы можете размещать образовательные ресурсы, видеоролики, делится анализом и многое другое
      </SubtitleAbout>
    </section >
  )
};

export default MainPage;