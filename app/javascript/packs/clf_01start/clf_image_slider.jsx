import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'

export default class CLF_Image_Slider extends React.Component {
  render() {
    const images = [
      {
        original: '/assets/entrada-derecha.jpg',
        thumbnail: '/assets/entrada-derecha.jpg',
      },
      {
        original: '/assets/entrada.jpg',
        thumbnail: '/assets/entrada.jpg'
      },
      {
        original: '/assets/picos-europa.jpg',
        thumbnail: '/assets/picos-europa.jpg'
      }
    ]

    return (
      <ImageGallery items={images} showThumbnails={false}
        showFullscreenButton={false} autoPlay={true} showPlayButton={false} />
    );
  }
}