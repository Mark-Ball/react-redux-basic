const defaultState = {
    name: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'NAME':
            return {...state, name: action.payload};
        default:
            return state;
    };
};