import React from 'react'
import { useNavigate } from 'react-router-dom';

const Newscard = ({news}) => {
const { title, description, category,image,_id, date } = news;
  
    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/news/${_id}`)} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <span className="text-gray-500 text-xs px-4 py-2">{formattedDate}</span>
      <span className="text-gray-500 text-xs px-4 py-2">{category}</span>
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{"__html":description.slice(0,80)}}></p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Read More
            </button>

            </div>

      
    </div>
  )
}

export default Newscard
