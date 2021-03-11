import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    AUTH_SIGNUP_FAILURE,
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS
} from '../actions/auth'

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    token: localStorage.getItem('token'),
    user: []
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_SIGNUP_REQUEST:
        case AUTH_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_SIGNUP_SUCCESS:
        case AUTH_LOGIN_SUCCESS:
            return {
                isLoading: false,
                isLoggedIn: true,
                token: localStorage.setItem('token', payload.access_token),
                user: payload.user
            }
        case AUTH_SIGNUP_FAILURE:
        case AUTH_LOGIN_FAILURE:
            return {
                isLoading: false,
                isLoggedIn: false,
                token: localStorage.removeItem('token'),
                user: []
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: localStorage.removeItem('token'),
                user: []
            }
        default:
            return state
    }
}

export default authReducer
