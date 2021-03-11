import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS
} from '../actions/users'

const initialState = {
    isLoading: true,
    error: null,
    users: []
}

const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                users: payload
            }
        case FETCH_USERS_FAILURE:
            return {
                isLoading: false,
                error: payload,
                users: []
            }
        default:
            return state
    }
}

export default usersReducer
