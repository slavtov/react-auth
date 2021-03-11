import { memo } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ children, color, type = 'middle', full, ...props }) => (
  <button
    className={`button button-${color} button-${type}`}
    style={{ width: full && '100%' }}
    {...props}
  >
    {children}
  </button>
)

export default memo(Button)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string,
  full: PropTypes.bool
}
