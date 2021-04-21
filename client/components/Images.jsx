import React, { useEffect, useState } from 'react'
import { getImages } from '../apiClient'
// import Image from './Image'

function Images () {
  // console.log('string')
  const runOnce = []
  const [data, setData] = useState('')

  useEffect(() => {
    getImages().then(image => {
      console.log(image.hits[0].pageURL)
      setData(image.hits[0].pageURL)
      return null
    }).catch(err => {
      console.log(err.message)
    })
  }, runOnce)

  return (
    <>
      { !data ? <p>Loading....</p>
        : <img src='../images/unsplashbike.jpg'width='auto' height='auto'/> }

    </>
  )
}

export default Images
