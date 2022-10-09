import * as types from './actionTypes';

export const registerStart = () => ({
    type: types.REGISTER_LOADING
})

export const registerError = (e) => ({
    type: types.REGISTER_ERROR,
    payload: e.toString()
})

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

export const loginStart = () => ({
    type: types.LOGIN_LOADING
})

export const loginError = (e) => ({
    type: types.LOGIN_ERROR,
    payload: e.toString()
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

export const logoutStart = () => ({
    type: types.LOGOUT_START
})

export const logoutError = (e) => ({
    type: types.LOGOUT_ERROR,
    payload: e.toString()
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
})
