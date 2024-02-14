import { ReactNode } from "react";
import { AnalyzeIcon, DesignIcon, DevIcon, HeadhunterIcon } from "../icons/icons";

interface ICourses {
    to: string;
    altName: string;
    icon: ReactNode;
};

export const COURSES: ICourses[] = [
    {
        to: "react",
        altName: "React-разработка",
        icon: <DevIcon />
    },
    {
        to: "analyze",
        altName: "Аналитика",
        icon: <AnalyzeIcon />
    },
    {
        to: "design",
        altName: "Дизайн",
        icon: <DesignIcon />
    },
    {
        to: "hr",
        altName: "HR",
        icon: <HeadhunterIcon />
    }
]