import React from 'react'
import { getImages } from '../apiClient'

function Image ({ props }) {
  getImages({ props })
  // console.log({ props })
  return (
    <div>
      <img src={ props } width='auto' height='auto'/>

    </div>
  )
}

export default Image
