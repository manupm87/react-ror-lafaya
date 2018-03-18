import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Start from '../clf_01_start/clf_start.jsx'
import CLF_Gallery from '../clf_02_gallery/clf_gallery.jsx'
import CLF_Availability from '../clf_03_availability/clf_availability.jsx'
import CLF_Rates from '../clf_04_rates/clf_rates.jsx'
import CLF_Route from '../clf_05_route/clf_route.jsx'
import CLF_Contact from '../clf_06_contact/clf_contact.jsx'

export default class CLF_Main extends React.Component {
  render() {
    switch(this.props.page) {
      case "start":
        return (<CLF_Start />)
      case "gallery":
        return (<CLF_Gallery />)
      case "availability":
        return (<CLF_Availability />)
      case "rates":
        return (<CLF_Rates />)
      case "route":
        return (<CLF_Route />)
      case "contact":
        return (<CLF_Contact />)
      default:
        return (<CLF_Start />)
    }
  }
}
