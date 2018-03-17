import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class CLF_Nav_Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.id};
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('Click' + this.state.id);
    this.props.setActive(this.state.id);
  }

  render() {
    return (
      <li className={"nav-item clf-nav-item " + (this.props.active ? "clf-nav-item-active" : "")}
        onClick={this.handleClick}>
        <span className="nav-link" href="">{this.props.name}</span>
        {/*this.props.active ? <hr/> : ""*/}
      </li>
    );
  }
};

CLF_Nav_Item.defaultProps = {
  name: 'Item',
  active: false
}

CLF_Nav_Item.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool
}
