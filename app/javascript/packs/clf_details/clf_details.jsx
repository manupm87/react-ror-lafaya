import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Detail from './clf_detail.jsx'

export default class CLF_Details extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column fill">
        <CLF_Detail svg="house" label="casa rural" value="2500 m²"/>
        <CLF_Detail svg="people" label="capacidad" value="10"/>
        <CLF_Detail svg="bedrooms" label="dormitorios" value="5"/>
        <CLF_Detail svg="bathrooms" label="baños" value="4"/>
        <CLF_Detail svg="nights" label="mín. estancia" value="2 noches"/>

      </div>
    );
  }
}
