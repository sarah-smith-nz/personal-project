import React from 'react'
import colors from '../colors'

function Header () {
  return (
    <>
      <div className="flex justify-center container mx-auto ">
        <div className="flex p-4 md-items-center">
          {/* <img src="images/unsplashbike.jpg" className="h-3 w-3" /> */}
          <div style={{ color: colors.color2 }}>MBA</div>
        </div>
      </div>

    </>
  )
}
export default Header
