import React from 'react'
import { assets } from '../../assets/assets'

const NewsTableitem = ( News,fetchNews, index) => {

    const{title, createdAt} = News
    const NewsDate = new Date(createdAt)
  return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4 max-sm:hidden'>{NewsDate.toLocaleDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p className={`${News.isPublished ? "text-green-600 " :"text-orange-700"}`}>
                {News.isPublished ? "Published" : "Unpublished"}
            </p>
        </td>
        <td className='px-2 py-4 flex text-xs gap-3'>
            <button className='border px-2 py-0.5 mt rounded cursor-pointer'>News.isPublished ?'Unpublish :Publish'</button>
            <img src={assets.cross_icon}className='w-8 hover: scale-110 transition-all cursor-pointer'alt="" />
        </td>
    </tr>
  )
}


export default NewsTableitem
