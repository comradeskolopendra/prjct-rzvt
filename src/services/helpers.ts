const formatMaxChars = (paragraph: string) => {
    return paragraph.slice(0, 127).concat("...");
};

const request = async (url: string, options: object = {}): Promise<Response> => {
    return await fetch(url, options).then(checkResponse);
};

const checkResponse = (response: Response): any => {
    try {
        if (response.ok) {
            response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export {
    formatMaxChars,
    request,
    checkResponse
}