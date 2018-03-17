import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class CLF_Detail extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex">
          <object className="fill" data={"/assets/svg/" + this.props.svg + ".svg"} type="image/svg+xml" />
        </div>
        <div className="clf-detail-label">
          <span className="">
          {this.props.label}
          </span>
        </div>
        <div className="clf-detail-value">
          <span className="">
          {this.props.value}
          </span>
        </div>
      </div>
    );
  }
}

CLF_Detail.propTypes = {
  svg: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};

CLF_Detail.defaultProps = {
  svg: 'house',
  label: 'house',
  value: '0'
}
