import {
  SectionContents,
  ContainerTitles,
  ContainerBlocks,
  TitleMain,
  SubtitleMain,
  SubtitleAbout,
  AnimationSentence
} from "./components";

const MainPage = () => {

  return (
    <SectionContents>
      <ContainerTitles>
        <TitleMain>
          Сбер.Соц
        </TitleMain>
        <SubtitleMain>
          Поделись знаниями с ближним своим!
        </SubtitleMain>
        <SubtitleAbout>
          Здесь Вы можете
          <AnimationSentence>
            делится
          </AnimationSentence>
          образовательными ресурсами, видеороликами, анализомами и многим другим
        </SubtitleAbout>
      </ContainerTitles>

      <ContainerBlocks>
      </ContainerBlocks>
    </SectionContents>
  )
};

export default MainPage;