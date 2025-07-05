import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 '>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-black'>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-xs text-blue-400">
        <p>&copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
        <ul className="flex mt-2 sm:mt-0">
          <li className="ml-3">
            <a className="text-gray-600 hover:text-blue-500" href="https://twitter.com" aria-label="Twitter">
              <i className="bi bi-twitter text-xl"></i>
            </a>
          </li>
          <li className="ml-3">
            <a className="text-gray-600 hover:text-pink-500" href="https://www.instagram.com" aria-label="Instagram">
              <i className="bi bi-instagram text-xl"></i>
            </a>
          </li>
          <li className="ml-3">
            <a className="text-gray-600 hover:text-blue-700" href="https://www.facebook.com" aria-label="Facebook">
              <i className="bi bi-facebook text-xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer