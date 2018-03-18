import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Nav_Pannel from './clf_navigation/clf_nav_pannel.jsx'
import CLF_Nav_Brand from './clf_navigation/clf_nav_brand.jsx'
import CLF_Main from './clf_main/clf_main.jsx'
import CLF_Details from './clf_details/clf_details.jsx'
import CLF_Footer from './clf_footer/clf_footer.jsx'

class CLF_Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: "start"};
  }

  setActive = (page) => {
    this.setState({page: page})
  }

  render() {
    return (
      <div className="container d-flex flex-column" id="clf-app">
        <CLF_Nav_Brand setActive={this.setActive}/>
        <div className="row d-flex fill">
          <div className="col-2">
            <CLF_Nav_Pannel page={this.state.page} setActive={this.setActive}/>
          </div>
          <div className="col d-flex">
            <CLF_Main page={this.state.page} />
          </div>
          <div className="col-2 d-flex">
            <CLF_Details />
          </div>
        </div>
        <CLF_Footer />
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
