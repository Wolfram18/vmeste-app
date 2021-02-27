const initialState = {
    content: [],
    count: 0
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'content':
            newState.content = action.value;
            break;
        case 'count':
            newState.count = action.value;
            break;
    }
    return newState;
};

export default reducer;