import { Redirect } from 'react-router-dom'
import Alert from '../../components/Alert/Alert'
import { useAuth } from '../../hooks/useAuth'
import { useNotification } from '../../hooks/useNotification'
import './Dashboard.css'

const Dashboard = () => {
  const message = useNotification()
  const { isLoggedIn, user: { _id: id, username, email } } = useAuth()

  if (!isLoggedIn)
    return <Redirect to="/login" />

  return (
    <section id="dashboard" className="dashboard">
      <h1>Dashboard</h1>

      {message && <Alert message={message} type="success" />}

      <div className="user">
        <p><span>ID:</span> {id}</p>
        <p><span>Username:</span> {username}</p>
        <p><span>Email:</span> {email}</p>
      </div>
    </section>
  )
}

export default Dashboard
