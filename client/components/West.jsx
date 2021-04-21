import React from 'react'

function West () {
  return (
    <>
      <nav className="relative flex border-t-2 py-3 flex-col mx-auto items-center justify-center px-2 py-3 bg-green-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="text-white text-center flex-col text-xl w-full relative flex justify-center">
            WEST AUCKLAND<br></br>
            Auckland's Home Ground for Mountain Biking. Our newly built 50km+ network is NZ's most frequented and has something for every level of rider. We're 40 minutes from downtown Auckland, have 75+ hire bikes, an onsite mechanic service, proshop & small cafe.<br></br>
            <img src="../images/Woodhilltrails.png" width='300px' height='auto'/>
            <img src="../images/Woodhilltrails.png" width='300px' height='auto'/>


          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pJ52MzGns3Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </nav>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div className="rounded-md shadow">
          <a href="https://www.bikeparks.co.nz/" target="_blank" alt='Woodhill Bike Park Link' className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Woodhill Bike Park
            <br></br>
          </a>
        </div>
      </div>

      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div className="rounded-md shadow">
          <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Home
          </a>
        </div>
      </div>
    </>
  )
}

export default West
