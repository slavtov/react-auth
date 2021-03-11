import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import notifications from './notifications'

export default combineReducers({
    auth,
    users,
    notifications
})
