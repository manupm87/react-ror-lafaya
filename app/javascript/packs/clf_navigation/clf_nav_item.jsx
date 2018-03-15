import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const CLF_Nav_Item = props => (
  <li className="nav-item">
    <a className="nav-link" href="">{props.name}</a>
  </li>
)

CLF_Nav_Item.defaultProps = {
  name: 'Item'
}

CLF_Nav_Item.propTypes = {
  name: PropTypes.string
}

export default CLF_Nav_Item;
