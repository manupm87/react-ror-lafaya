import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CLF_Image_Slider from './clf_image_slider'
import CLF_Description from './clf_description'

export default class CLF_Start extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">

        <div className="fill">
          <CLF_Image_Slider />
        </div>
        <div>
          <CLF_Description />
        </div>

      </div>
    );
  }
}
