import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { getContents } from "../../redux/actions/contents";
import { useParams } from "react-router";
import { TDepartments } from "../../redux/slices/contents";

import {
    ItemCourse,
    TitleCourse,
    ListCourses,
    ImageAvatar,
    SubtitleCourse,
    ContainerAuthor
} from "./components";

import { formatMaxChars } from "../../services/helpers";
import { getStateCourseById } from "./selectors";
import { Link } from "react-router-dom";

const CoursePage: FC = () => {
    const dispatch = useAppDispatch();
    const { department } = useParams<{ department: TDepartments }>();
    const courses = useAppSelector(getStateCourseById(department as TDepartments));

    useEffect(() => {
        dispatch(getContents(department as TDepartments));
    }, []);

    return (
        <ListCourses>
            {courses?.posts.map(course => (
                <>
                    <Link to={"/"}>

                        <ItemCourse key={course.title}>

                            <TitleCourse>{course.title}</TitleCourse>
                            {formatMaxChars(course.contents[0])}
                            <ContainerAuthor>
                                <ImageAvatar src={course.avatar} alt="" width={50} height={50} />
                                <SubtitleCourse>Автор: <span>{course.author}</span></SubtitleCourse>
                            </ContainerAuthor>
                        </ItemCourse>
                    </Link >
                </>

            ))
            }
        </ListCourses >
    )
};

export default CoursePage;