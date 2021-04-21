import React from 'react'

function MapShow () {
  return (
    <>

      <nav className="relative flex border-t-2 py-3 flex-col mx-auto items-center justify-center px-2 py-3 bg-green-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="text-white text-center  text-xl w-full relative flex justify-center">

            <a href="https://www.google.com/maps/d/embed?mid=1o4G7KEV_FbyPDrTBV35UPFSDLPo&ie=UTF8&hl=en&msa=0&ll=-36.86094399999999%2C174.77325400000004&spn=0.76912%2C1.167297&z=9&output=embed"><img src="../images/MapFill.JPG" width='auto' height='auto'/> </a>

          </div>
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-right lg:justify-right">
          <div className="rounded-md shadow">
            <a href="/west" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                West Auckland
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MapShow
