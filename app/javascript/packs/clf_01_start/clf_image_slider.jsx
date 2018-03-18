import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'

export default class CLF_Image_Slider extends React.Component {
  render() {
    const images = [
      {
        original: '/assets/entrada-derecha.png',
        thumbnail: '/assets/entrada-derecha.png',
      },
      {
        original: '/assets/entrada.png',
        thumbnail: '/assets/entrada.png'
      },
      {
        original: '/assets/esquina-atras-derecha.png',
        thumbnail: '/assets/esquina-atras-derecha.png'
      },
      {
        original: '/assets/lateral-derecha.png',
        thumbnail: '/assets/lateral-derecha.png'
      },
      {
        original: '/assets/lateral-limonero.png',
        thumbnail: '/assets/lateral-limonero.png'
      },
      {
        original: '/assets/picos-europa.png',
        thumbnail: '/assets/picos-europa.png'
      }
    ]

    return (
      //
      <div className="d-flex clf-image-gallery">
        <ImageGallery items={images} showThumbnails={false}
          showFullscreenButton={false} autoPlay={true} showPlayButton={false}
          slideDuration={800} disableArrowKeys={true} showNav={false}
          slideInterval={5000}/>
      </div>
    );
  }
}
