import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import strapi from "../../services/strapi";
import ContentItem from "./content-item/content-item";
import { ContainerContents } from "./components";

const ContentsPage: FC = () => {
    const [page, setPage] = useState<number>(1);

    const { data, isPending, mutate } = useMutation({
        mutationKey: ["contents"],
        mutationFn: async ({ page, pageSize = 10 }: { page: number; pageSize?: number }) => {
            return await strapi.getThemes({
                page,
                pageSize
            });
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    useEffect(() => {
        mutate({ page });
    }, [page])

    return (
        <ContainerContents>
            Лента
            {data && data.data.themes.data.map((theme) =>
                <ContentItem
                    key={theme.id}
                    id={theme.id}
                    title={theme.attributes.title}
                    markdown={theme.attributes.markdown}
                    author={theme.attributes.user.data.attributes.username}
                    authorId={theme.attributes.user.data.id}
                />
            )}
        </ContainerContents>
    )
}

export default ContentsPage;