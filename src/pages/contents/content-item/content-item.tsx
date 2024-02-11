import { FC } from "react";
import { CustomLink } from "../../../components/link/link";
import { ContainerTitle, ContainerSubtitle, ContainerWrapper, SpanAuthor } from "./components";

interface IContentItem {
    id: string | number;
    title: string;
    markdown: string;
    author: string;
    authorId: number | string | null;
}

const ContentItem: FC<IContentItem> = ({ id, title, markdown, author, authorId }) => {

    return (
        <ContainerWrapper>
            <SpanAuthor>
                Автор:<CustomLink to={`/profiles/${authorId}`}>{author}</CustomLink>
            </SpanAuthor>
            <ContainerTitle>{title}</ContainerTitle>
            <ContainerSubtitle>{markdown}</ContainerSubtitle>
        </ContainerWrapper>
    )
};

export default ContentItem;