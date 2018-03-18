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
          <div className="navbar-brand d-flex">
            <div className="clf-brand-contact">
              <div className="clf-brand-name">Casa La Faya</div>
              <div className="">+34 689 573 955</div>
              <div className="">info@casalafaya.com</div>
            </div>
            <div className="clf-language d-flex flex-column justify-content-around">
              <div className="clf-lang-esp">
                <object data={"/assets/svg/spain.svg"} type="image/svg+xml" />
              </div>
              <div className="clf-lang-eng">
                <object data={"/assets/svg/united-kingdom.svg"} type="image/svg+xml" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
