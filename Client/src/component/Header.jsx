import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-center">
      <a href="/" className="mb-2">
         <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">THE SIX SENCE</h1>
        <p className="text-xs sm:text-sm md:text-base font-bold text-amber-800">
          INDEPENDENT MEDIA BODY OF IIT PATNA
        </p>
        </a>
    </div>
  )
}

export default Header

