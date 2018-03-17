import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Nav_Item from './clf_nav_item.jsx'

export default class CLF_Nav_Pannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: props.active};
  }

  setActive = (page) => {
    this.setState({active: page});
    this.props.setActive(page);
  }

  render() {
    return (
      <ul className="nav flex-column">
        <CLF_Nav_Item name="Inicio" id="start" setActive={this.setActive}
            active={this.state.active == "start" ? true : false}/>
        <CLF_Nav_Item name="Galería" id="gallery" setActive={this.setActive}
            active={this.state.active == "gallery" ? true : false} />
        <CLF_Nav_Item name="Disponibilidad" id="availability" setActive={this.setActive}
            active={this.state.active == "availability" ? true : false} />
        <CLF_Nav_Item name="Precios" id="rates" setActive={this.setActive}
            active={this.state.active == "rates" ? true : false} />
        <CLF_Nav_Item name="Cómo llegar" id="route" setActive={this.setActive}
            active={this.state.active == "route" ? true : false} />
        <CLF_Nav_Item name="Contacto" id="contact" setActive={this.setActive}
            active={this.state.active == "contact" ? true : false} />
      </ul>
    );
  }
}
