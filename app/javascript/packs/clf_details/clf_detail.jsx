import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class CLF_Detail extends React.Component {
  render() {
    return (
      <div className="clf-detail d-flex">
        <object data={"/assets/svg/" + this.props.name + ".svg"} type="image/svg+xml" />
      </div>
    );
  }
}

CLF_Detail.propTypes = {
  name: PropTypes.string
};

CLF_Detail.defaultProps = {
  name: 'house'
}
