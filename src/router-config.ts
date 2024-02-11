interface IRoute {
    to: string;
    title: string;
}

export const routerLinks: IRoute[] = [
    {
        to: "/",
        title: "Главная"
    },
    {
        to: "/home",
        title: "Личный кабинет"
    },
    {
        to: "/about-project",
        title: "О Проекте"
    },
    {
        to: "/contents",
        title: "Лента"
    }
]