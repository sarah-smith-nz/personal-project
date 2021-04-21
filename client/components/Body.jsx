import React from 'react'

function Body () {
  return (
    <>
      <nav className="relative flex border-t-2 py-3 flex-col mx-auto items-center justify-center px-2 py-3 bg-green-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="text-white text-center  text-xl w-full relative flex justify-center">
            FIND YOUR TRAILS<br></br>

              Discover Aucklands bike parks and trails with MBA. Make the inside knowledge yours and learn whats available for mountain biking in Auckland.
          </div>
        </div>

      </nav>

      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div className="rounded-md shadow">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Gallery
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-green-300 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                Parks
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                Clubs
          </a>
        </div>
      </div>
    </>
  )
}

export default Body
