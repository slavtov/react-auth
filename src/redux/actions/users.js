import { http } from '../../helpers/api'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error.message
})

export const fetchUsers = () => async dispatch => {
    dispatch(fetchUsersRequest())

    try {
        const res = await http('GET', 'users')
        dispatch(fetchUsersSuccess(res))
    } catch (err) {
        dispatch(fetchUsersFailure(err))
    }
}
