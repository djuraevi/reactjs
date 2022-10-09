import * as types from './actionTypes';
import { loginStart, loginError, loginSuccess, registerError, registerStart, registerSuccess, logoutStart, logoutSuccess, logoutError } from './action';
import { auth } from '../servise/firebase';

const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_LOADING:
        case types.LOGIN_LOADING:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: state.currentUser = null
            }

        default:
            return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((e) => dispatch(registerError(e.toString())))
    }
}

export const loginInitiate = (email, password) => {
    return(dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((e) => dispatch(loginError(e)))
    }
}

export const logoutInitiate = () => {
    return(dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e)))
    }
}