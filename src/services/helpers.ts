import { colors } from "./constants";

const formatMaxChars = (paragraph: string) => {
    return paragraph.slice(0, 127).concat("...");
};

const getRandomColor = () => {
    return colors[Math.round(colors.length * Math.random())];
};

export {
    formatMaxChars,
    getRandomColor
}