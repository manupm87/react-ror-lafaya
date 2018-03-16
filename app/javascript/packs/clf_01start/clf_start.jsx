import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Image_Slider from './clf_image_slider'
import CLF_Description from './clf_description'
import CLF_Details from './clf_details'

export default class CLF_Start extends React.Component {
  render() {
    return (
      <div>
        <CLF_Image_Slider />
        <CLF_Description />
        <CLF_Details />
      </div>
    );
  }
}
