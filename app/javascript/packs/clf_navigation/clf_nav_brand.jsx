import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class CLF_Nav_Brand extends React.Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.setActive("start")
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand clf-brand" onClick={this.handleClick}>
            <img src="/assets/logo-big.png" height="60" alt="" />
          </div>
          <span className="navbar-brand mb-0 h1">Casa La Faya</span>
        </nav>
      </header>
    );
  }
}
