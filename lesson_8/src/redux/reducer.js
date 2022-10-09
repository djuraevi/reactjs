import { errorUsers, loadingUsers } from "./actions"

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getTodos':
            return {
                ...state,
                users: action.payload
            }
        case 'loading':
            return {
                ...state,
                loading: true
            }
        case 'error': 
        return {
            ...state,
            error: action.payload
        }

        default:
            return state
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(loadingUsers());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data = await response.json();
            dispatch({type: 'getTodos', payload: data});
        } catch (e) {
            dispatch(errorUsers(e.toString()));
        }
    }
}