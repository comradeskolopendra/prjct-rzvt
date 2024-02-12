import {
  SectionContents,
  ContainerTitles,
  SectionBlocks,
  TitleMain,
  SubtitleMain,
  SubtitleAbout,
  AnimationSentence,
  ContainerBlock
} from "./components";

import { DevIcon, HeadhunterIcon, DesignIcon, AnalyzeIcon } from "./icons/icons";

const MainPage = () => {

  return (
    <SectionContents>
      <ContainerTitles>
        <TitleMain>
          Сбер.Инфо
        </TitleMain>
        <SubtitleMain>
          Поделись знаниями с ближним своим!
        </SubtitleMain>
        <SubtitleAbout>
          Здесь Вы можете
          <AnimationSentence>
            &nbsp; делится &nbsp;
          </AnimationSentence>
          образовательными ресурсами, видеороликами, анализомами и многим другим
        </SubtitleAbout>
      </ContainerTitles>

      <SectionBlocks>
        <ContainerBlock>
          <DevIcon />
        </ContainerBlock>
        <ContainerBlock>
          <AnalyzeIcon />
        </ContainerBlock>
        <ContainerBlock>
          <HeadhunterIcon />
        </ContainerBlock>
        <ContainerBlock>
          <DesignIcon />
        </ContainerBlock>
      </SectionBlocks>
    </SectionContents>
  )
};

export default MainPage;