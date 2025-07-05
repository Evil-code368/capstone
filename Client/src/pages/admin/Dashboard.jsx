import React, { useState, useEffect } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import NewsTableitem from '../../component/admin/NewsTableitem'
import { useAppContext } from '../../context/App.Context'


const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    news: 0,
    comments: 0,
    drafts: 0,
    recentNews: [],
  })
    const {axios} = useAppContext()

     const fetchDashboardData =async ()=>{
      try {
        const {data} = await axios.get('/api/admin/dashboard')
        data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
      } catch (error) {
        toast.error(error.message)
      }
     }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
        <img src={assets.dashboard_icon_1} alt="" />
        <div>
          <p className='text-xl font-semibold text-gray-600'>{dashboardData.news}</p>
          <p className='text-gray-400 font-light'>News</p>
        </div>
      </div>
      {/* Add more dashboard cards as needed */}
      <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all mt-4'>
        <img src={assets.dashboard_icon_2} alt="" />
        <div>
          <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
          <p className='text-gray-400 font-light'>Comments</p>
        </div>
    </div>

      <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all mt-4'>
        <img src={assets.dashboard_icon_3} alt="" />
        <div>
          <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
          <p className='text-gray-400 font-light'>Drafts</p>
        </div>
      </div>
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest news</p>
       

        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
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
              {(dashboardData.recentNews ||[]).map((news, index) =>{
               return <NewsTableitem key={news._id} news={news} 
               fetchNews={fetchDashboardData}index={index + 1} />
})}
</tbody>
          </table>
        </div>

       </div>
       </div>
      </div>
    

      
  )
}

export default Dashboard
