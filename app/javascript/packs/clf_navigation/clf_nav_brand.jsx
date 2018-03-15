import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class CLF_Nav_Brand extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/assets/logo.gif" height="60" alt="" />
        </a>
        <span className="navbar-brand mb-0 h1">Casa La Faya</span>
      </nav>
    );
  }
}
