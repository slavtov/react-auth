export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const ADD_ERROR = 'ADD_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export const addNotification = message => ({
    type: ADD_NOTIFICATION,
    payload: message
})

export const removeNotification = () => ({
    type: REMOVE_NOTIFICATION
})

export const addError = error => ({
    type: ADD_ERROR,
    payload: error.message
})

export const removeError = () => ({
    type: REMOVE_ERROR
})
