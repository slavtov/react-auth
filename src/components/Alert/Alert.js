import { memo } from 'react'
import PropTypes from 'prop-types'
import './Alert.css'

const Alert = ({ message, type = 'danger' }) => (
  <div className={`alert alert-${type}`}>
    {message}
  </div>
)

export default memo(Alert)

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string
}
