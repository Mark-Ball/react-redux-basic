export const setName = (name = '') => {
    return {
        type: 'NAME',
        payload: name
    };
};