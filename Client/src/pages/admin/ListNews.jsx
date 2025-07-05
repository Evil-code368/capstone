import React from 'react'
import NewsTableitem from '../../component/admin/NewsTableitem';
import { useState, useEffect } from 'react'

const ListNews = () => {

  const[news, setNews] = useState([]);

  const fetchNews = async () => {
    setNews(new_data)
  }

  useEffect(() => {
    fetchNews()
  }, [])
  return (
    <div className='flex-1 pt-5 sm:pl-16 bg-50/50'>
     <h1>All News</h1> 
     <div className='relative h-4/5 max-w-4xl mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-500'>
              <tr>
                <th scope='col'className='px-2 py-4'>#</th>
                <th scope='col'className='px-2 py-4'>News Title</th>
                <th scope='col'className='px-2 py-4'>Date</th>
                <th scope='col'className='px-2 py-4'>Status</th>
                <th scope='col'className='px-2 py-4'>Action</th>
              </tr>
            </thead>
          
            <tbody>
              {news.map((item, index) => {
                return <NewsTableitem key={news._id} new={news}
                fetchNews={fetchNews} index={index + 1} />
              })}
            </tbody>
            </table>
</div>

    </div>
  )
}

export default ListNews
