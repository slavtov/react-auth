import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './Logo.css'

const Logo = () => (
  <Link to="/" className="logo">
    <img src={logo} width="50" alt="logo" />
    React Auth
  </Link>
)

export default Logo
