import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Detail from './clf_detail.jsx'

export default class CLF_Details extends React.Component {
  render() {
    return (
      <div>
        <CLF_Detail name="house"/>
        <CLF_Detail name="people"/>
        <CLF_Detail name="bedrooms"/>
        <CLF_Detail name="bathrooms"/>
        <CLF_Detail name="nights"/>

      </div>
    );
  }
}
