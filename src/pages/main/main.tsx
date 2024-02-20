import { Link } from "react-router-dom";
import {
  SectionContents,
  SectionBlocks,
  TitleMain,
  SubtitleMain,
  SubtitleAbout,
  AnimationSentence,
  ContainerBlock,
} from "./components";
import { COURSES } from "./constants/courses-config";
import { getRandomColor } from "../../services/helpers";
import { motion } from "framer-motion";

const MainPage = () => {

  return (
    <SectionContents>
      <motion.div
        initial={{
          opacity: 0,
          translateX: -200,
        }}

        animate={{
          translateX: 0,
          opacity: 1
        }}

        transition={{
          type: "spring",
          duration: 1
        }}
      >
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
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          type: "spring",
          duration: 1
        }}
      >
        <SectionBlocks>
          {
            COURSES.map(course => (
              <Link key={course.altName} to={`/courses/${course.to}`}>
                <ContainerBlock $randomColor={getRandomColor()}>
                  {course.icon}
                </ContainerBlock>
              </Link>
            ))
          }
        </SectionBlocks>
      </motion.div>
    </SectionContents >
  )
};

export default MainPage;