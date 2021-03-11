import { memo } from 'react'
import './Input.css'

const Input = props => (
  <div className="form-input">
    <input {...props} className="input" />
  </div>
)

export default memo(Input)
