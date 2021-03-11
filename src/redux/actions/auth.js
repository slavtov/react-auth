import { http } from '../../helpers/api'
import {
    addError,
    addNotification,
    removeError
} from './notifications'

export const AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST'
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE'

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'

export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const authSignupRequest = () => ({
    type: AUTH_SIGNUP_REQUEST
})

export const authSignupSuccess = user => ({
    type: AUTH_SIGNUP_SUCCESS,
    payload: user
})

export const authSignupFailure = () => ({
    type: AUTH_SIGNUP_FAILURE
})

export const authLoginRequest = () => ({
    type: AUTH_LOGIN_REQUEST
})

export const authLoginSuccess = user => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: user
})

export const authLoginFailure = () => ({
    type: AUTH_LOGIN_FAILURE
})

export const authLogout = () => ({
    type: AUTH_LOGOUT
})

export const fetchSignup = (username, email, password) => async dispatch => {
    dispatch(authSignupRequest())

    try {
        const res = await http('POST', 'auth/register', {
            username,
            email,
            password
        })

        dispatch(removeError())
        dispatch(authSignupSuccess(res))
        dispatch(addNotification('You\'re registered successfully'))
    } catch (err) {
        dispatch(addError(err))
        dispatch(authSignupFailure())
    }
}

export const fetchLogin = (email, password) => async dispatch => {
    dispatch(authLoginRequest())

    try {
        const res = await http('POST', 'auth/login', {
            email,
            password
        })

        dispatch(removeError())
        dispatch(authLoginSuccess(res))
    } catch (err) {
        dispatch(addError(err))
        dispatch(authLoginFailure())
    }
}
