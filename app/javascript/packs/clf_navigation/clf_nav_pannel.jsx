import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Nav_Item from './clf_nav_item.jsx'

export default class CLF_Nav_Pannel extends React.Component {
  render() {
    return (
      <ul className="nav flex-column">
        <CLF_Nav_Item name="Sara" />
        <CLF_Nav_Item name="Cahal" />
        <CLF_Nav_Item name="Edite" />
      </ul>
    );
  }
}
