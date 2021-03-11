import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { http } from '../../helpers/api'
import { authLogout } from '../../redux/actions/auth'
import Button from '../Button/Button'
import './Nav.css'

const Nav = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(authLogout())
    http('GET', 'auth/logout')
    .catch(err => console.error(err.message))
  }

  if (isLoggedIn) {
    return (
      <div className="navbar-content">
        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Button
            onClick={handleClick}
            color="primary"
            type="small"
          >
            Logout
          </Button>
        </div>
      </div>
    )
  }

  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
