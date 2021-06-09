import React, { useEffect } from 'react'
import { getPark } from './parkHelper'

function ParkDetails () {
  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getPark(id)
      .then((park) => {
        return (park)
      })
  }, [])
  return (
    <div >
      <h1 className='text-2xl mr-4 text-green-700'>Parks listing</h1>
    </div>
  )
}

export default ParkDetails
