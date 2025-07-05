import React from 'react'
import Header from '../../component/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../component/admin/sidebar'
import { useAppContext } from '../../context/App.Context'

const Layout = () => {

  const {axios, setToken, navigate} = useAppContext()

 const logout = ()=>{
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        setToken(null)
        navigate('/')
    }

  return (
<>

 <div className="flex justify-end mb-4">
            <button
      onClick={logout} 
      className='text-sm px-8 py-3 bg-primary text-white rounded-full cursor-pointer'
      >Logout
      </button>
 </div>

      <hr className="my-2 border-gray-300" />
     


     <div className='flex h-[calc(100vh-70px)]'>
      <Sidebar />
      <Outlet/>

     </div>
  </>
  )
}

export default Layout
