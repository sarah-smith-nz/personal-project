import React from 'react'


function Image ({ props }) {
  console.log({ props })
  return (
    <div>
      <img src={ props } width='auto' height='auto'/>

    </div>
  )
}

export default Image
