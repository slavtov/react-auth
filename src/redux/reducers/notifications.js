import {
    ADD_ERROR,
    ADD_NOTIFICATION,
    REMOVE_ERROR,
    REMOVE_NOTIFICATION
} from '../actions/notifications'

const initialState = {
    message: null,
    error: null
}

const notificationsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                message: payload
            }
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                message: null
            }
        case ADD_ERROR:
            return {
                ...state,
                error: payload
            }
        case REMOVE_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export default notificationsReducer
