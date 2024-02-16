const formatMaxChars = (paragraph: string) => {
    return paragraph.slice(0, 127).concat("...");
};

const request = (url: string, options: object = {}) => {
    return fetch(url, options);
};

// const requestWithRefresh = () => { }

export {
    formatMaxChars
}