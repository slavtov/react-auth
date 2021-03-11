import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Alert from '../components/Alert/Alert'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { useAuth } from '../hooks/useAuth'
import { useError } from '../hooks/useError'
import { fetchLogin } from '../redux/actions/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLoading, isLoggedIn } = useAuth()
  const error = useError()
  const dispatch = useDispatch()

  const changeEmail = useCallback(event => setEmail(event.target.value), [])
  const changePassword = useCallback(event => setPassword(event.target.value), [])
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchLogin(email, password))
  }

  if (isLoggedIn)
    return <Redirect to="/dashboard" />

  return (
    <section id="login" className="login">
      <h1>Log in</h1>

      <form onSubmit={handleSubmit} className="login-submit">
        <Input onChange={changeEmail} value={email} type="text" id="email" name="email" placeholder="Email" />
        <Input onChange={changePassword} value={password} type="password" id="password" name="password" placeholder="Password" />
        <Button color="primary" full>
          {isLoading ? 'Loading...' : 'Log in'}
        </Button>
      </form>

      {error && <Alert message={error} />}

      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </section>
  )
}

export default Login
