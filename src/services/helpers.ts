const formatMaxChars = (paragraph: string) => {
    return paragraph.slice(0, 127).concat("...");
};

export {
    formatMaxChars
}