import { Redirect } from 'react-router-dom'
import UsersList from '../components/UsersList'
import { useAuth } from '../hooks/useAuth'

const Users = () => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn)
    return <Redirect to="/login" />

  return (
    <section id="users" className="users">
      <h1>Users</h1>

      <UsersList />
    </section>
  )
}

export default Users
