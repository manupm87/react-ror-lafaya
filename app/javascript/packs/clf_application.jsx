import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Nav_Pannel from './clf_navigation/clf_nav_pannel.jsx'
import CLF_Nav_Brand from './clf_navigation/clf_nav_brand.jsx'
import CLF_Start from './clf_01start/clf_start.jsx'

class CLF_Application extends React.Component {
  render() {
    return (
      <div>
        <CLF_Nav_Brand />
        <CLF_Nav_Pannel />
        <CLF_Start />
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
