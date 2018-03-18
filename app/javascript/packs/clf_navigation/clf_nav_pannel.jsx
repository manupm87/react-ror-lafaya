import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Nav_Item from './clf_nav_item.jsx'

export default class CLF_Nav_Pannel extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <ul className="nav flex-column">
        <CLF_Nav_Item name="Inicio" id="start" setActive={this.props.setActive}
            active={this.props.page == "start" ? true : false}/>
        <CLF_Nav_Item name="Galería" id="gallery" setActive={this.props.setActive}
            active={this.props.page == "gallery" ? true : false} />
        <CLF_Nav_Item name="Disponibilidad" id="availability" setActive={this.props.setActive}
            active={this.props.page == "availability" ? true : false} />
        <CLF_Nav_Item name="Precios" id="rates" setActive={this.props.setActive}
            active={this.props.page == "rates" ? true : false} />
        <CLF_Nav_Item name="Cómo llegar" id="route" setActive={this.props.setActive}
            active={this.props.page == "route" ? true : false} />
        <CLF_Nav_Item name="Contacto" id="contact" setActive={this.props.setActive}
            active={this.props.page == "contact" ? true : false} />
      </ul>
    );
  }
}
