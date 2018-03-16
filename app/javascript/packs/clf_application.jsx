import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Nav_Pannel from './clf_navigation/clf_nav_pannel.jsx'
import CLF_Nav_Brand from './clf_navigation/clf_nav_brand.jsx'
import CLF_Start from './clf_01start/clf_start.jsx'
import CLF_Details from './clf_details/clf_details.jsx'

class CLF_Application extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <CLF_Nav_Brand />
        <div className="row">
          <div className="col-2">
            <CLF_Nav_Pannel />
          </div>
          <div className="col">
            <CLF_Start />
          </div>
          <div className="col-2">
            <CLF_Details />
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CLF_Application />,
    document.body.appendChild(document.createElement('div')),
  )
})
