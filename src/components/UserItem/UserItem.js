import PropTypes from 'prop-types'
import './UserItem.css'

const UserItem = ({ item: { username, email, date } }) => (
  <div className="user-item">
    <h3>{username}</h3>
    <p>{email}</p>
    <p>{date}</p>
  </div>
)

export default UserItem

UserItem.propTypes = {
  item: PropTypes.object.isRequired
}
