import React from 'react'
import { MapContainer } from 'react-leaflet'

export default function Map () {
  return (
    <div>
      <MapContainer
        className='mt-5 relative z-10'
        style={{ width: '50vw', height: 'calc(100vh - 155px)' }}
        center={[-36.88267, 174.76667]}
        zoom={13}
        scrollWheelZoom={true}
      ></MapContainer>
    </div>
  )
}
