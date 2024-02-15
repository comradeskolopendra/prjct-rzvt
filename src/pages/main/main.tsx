import { Link } from "react-router-dom";
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
import { COURSES } from "./constants/courses-config";

const MainPage = () => {
  return (
    <SectionContents>
      <ContainerTitles>
        <TitleMain>
          Пркт.Развитие
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
        {
          COURSES.map(course => (
            <Link key={course.altName} to={`/courses/${course.to}`}>
              <ContainerBlock>
                {course.icon}
              </ContainerBlock>
            </Link>
          ))
        }
      </SectionBlocks>
    </SectionContents>
  )
};

export default MainPage;