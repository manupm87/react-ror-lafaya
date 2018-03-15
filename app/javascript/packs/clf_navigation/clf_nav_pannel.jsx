import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Nav_Item from './clf_nav_item.jsx'

export default class CLF_Nav_Pannel extends React.Component {
  render() {
    return (
      <ul className="nav flex-column">
        <CLF_Nav_Item name="Inicio" />
        <CLF_Nav_Item name="Galería" />
        <CLF_Nav_Item name="Disponibilidad" />
        <CLF_Nav_Item name="Precios" />
        <CLF_Nav_Item name="Cómo llegar" />
        <CLF_Nav_Item name="Contacto" />
      </ul>
    );
  }
}
