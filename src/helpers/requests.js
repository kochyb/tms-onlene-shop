export const serverGet = (url, userOptions = {}) => {
    const options = {
        method: 'GET',
        ...userOptions
    };
    return fetch(url, options).then(response => response.json());
};
