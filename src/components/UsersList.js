import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/actions/users'
import UserItem from './UserItem/UserItem'

const UsersList = () => {
  const { isLoading, error, users } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchUsers()), [dispatch])

  if (error)
    return <div>Error: {error}</div>
  else if (isLoading)
    return <div>Loading...</div>
  else
    return (
      <div>
        {users.length ? users.map(user => (
          <UserItem key={user._id} item={user} />
        )) : 'Not Found'}
      </div>
    )
}

export default UsersList
