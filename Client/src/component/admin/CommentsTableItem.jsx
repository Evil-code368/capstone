import React from 'react'
import { assets } from '../../assets/assets'

const CommentsTableitem = ({ comment }) => {
  const { news, createdAt, name, content, isApproved } = comment
  const newsDate = new Date(createdAt)

  return (
    <tr className='border-y border-gray-300'>
      <td className='px-6 py-4'>
        <b className='font-medium text-gray-600'>News</b>: {news?.title} <br />
        <b className='font-medium text-gray-600'>Name</b>: {name} <br />
        <b className='font-medium text-gray-600'>Comment</b>: {content} <br />
      </td>
      <td className='px-6 py-4 max-sm:hidden'>
        {newsDate.toLocaleDateString()}
      </td>
      <td className='px-6 py-4'>
        <div className='inline-flex items-center gap-4'>
          {!isApproved ? (
            <img
              src={assets.tick_icon}
              alt="Approve"
              className='w-5 hover:scale-110 transition-all cursor-pointer'
            />
          ) : (
            <p className='text-xs border border-green-600 bg-green-100 rounded-full px-3 py-1'>Approved</p>
          )}
          <img
            src={assets.bin_icon}
            alt="Delete"
            className='w-5 hover:scale-110 transition-all cursor-pointer'
          />
        </div>
      </td>
    </tr>
  )
}

export default CommentsTableitem
