
const initialState = {
    id: '',
    story: {}
}

export const useReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ID': {
            console.log(action.action);
            return {
                ...state,
                id: action.action
            }
        }
        case 'ONE': {
            console.log(action.action);
            return {
                ...state,
                story: action.action
            }
        }
        default: {
            return state;
        }
    }
};