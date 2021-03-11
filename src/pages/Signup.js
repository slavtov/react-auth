import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Alert from '../components/Alert/Alert'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { useAuth } from '../hooks/useAuth'
import { useError } from '../hooks/useError'
import { fetchSignup } from '../redux/actions/auth'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLoading, isLoggedIn } = useAuth()
  const error = useError()
  const dispatch = useDispatch()

  const changeUsername = useCallback(event => setUsername(event.target.value), [])
  const changeEmail = useCallback(event => setEmail(event.target.value), [])
  const changePassword = useCallback(event => setPassword(event.target.value), [])
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchSignup(username, email, password))
  }

  if (isLoggedIn)
    return <Redirect to="/dashboard" />

  return (
    <section id="signup" className="signup">
      <h1>Sign up</h1>

      <form onSubmit={handleSubmit} className="signup-submit">
        <Input onChange={changeUsername} value={username} type="text" className="signup-input" id="username" name="username" placeholder="Username" />
        <Input onChange={changeEmail} value={email} type="text" className="signup-input" id="email" name="email" placeholder="Email" />
        <Input onChange={changePassword} value={password} type="password" className="signup-input" id="password" name="password" placeholder="Password" />
        <Button color="success" full>
          {isLoading ? 'Loading...' : 'Sign up'}
        </Button>
      </form>

      {error && <Alert message={error} />}

      <p>Have an account? <Link to="/login">Log in</Link></p>
    </section>
  )
}

export default Signup
