import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Moment from 'moment'
import Loader from '../component/Loader'
import { useAppContext } from '../context/App.Context'
const News = () => {
  const { id } = useParams()
  const {axios} =useAppContext()

  const [data, setdata]=useState(null)
  const [comments, setComments]=useState([])

     const [name, setName]=useState('')
     const [content, setContent]=useState('')


  const fetchData = async () => {
    try{
      const{data} = await axios.get(`/api/news/${id}`)
      data.success ? setdata(data.news) : toast.error(data.message)
    } catch (error){
      toast.error(error.message)
      }
    }
    const fetchComments = async () => {
     try{
      const {data} = await axios.post('/api/news/comment',{newsId: id})
      if (data.success){
        setComments(data.comments)
      }else{
        toast.error(data.message)
      }
     }catch(error){
      toast.error(error.message);
     }

  }

  const addComment = async () => {
    e.preventDefault();
    try{
      const {data} = await axios.post('api/news/add-comment',{news: id, name, content});
      if (data.success){
        toast.success(data.message)
        setName('')
        setContent('')
      }else{
        toast.error(data.message);
      }
      
    }catch(error){
      toast.error(error.message);
    }

  }
useEffect(() => {
  fetchData()
  fetchComments()
}, [])

  return   data ? (
    <div className='text-center mt-20 text-gray'>

      <p className='text-primary py-4 font-medium'>Published on {Moment(data.createAt).format('Do MMMM YYYY')}</p>
      <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx auto text-gray-800'>{data.title}</h1>
      <h2 className='my-5xl max-w-lg truncate mx-auto'>{data.subTitle}</h2>
      <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Michal Brown</p>
    <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
      <img src={data.image} alt=""className='rounded-3xl mb-5' />

      <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: data.content }}></div>

      {/*comment section*/}
      <div className='mt-14 mb-10 max-w-3xl mx-auto'></div>
      <p className=' font-semibold'>Comments ({comments.length})</p>
      <div className='flex flex-col gap-4'></div>
      {comments.map((item, index) => (
        <div key ={index} className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600'>
        <img src={item.avatar} alt=""className='w-6' />
        <p className='font-medium'>{item.name}</p>
        <p className='text-sm max-w-md ml-8'>{item.content}</p>
      
        <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()} 
        </div>
        </div>

      ))}

      {/*comment form*/}
      <div className='max-w-3xl mx-auto'>
        <p className='font-semibold mb-4'>Add your comment</p>
        <form onSubmit={addComment}className='flex flex-col items-start gap-4 max-w-lg'>

          <input onChange={(e)=> setName(e.target.value)} value={name}type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none' />

          <textarea onChange={(e)=> setContent(e.target.value)} value={content} placeholder='Comment'className='w-full p-2 border border-gray-300 rounded outline-none h-48' required></textarea>
          <button type='submit'className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>
        </form>
      </div>
      {/*share Buttons*/}

      <div className='my-24 max-w 3xl mx-auto'>
        <p className='font-semibold mb-4'>Share this article</p>
        <div className='flex items-center gap-4'>
          <img src="/images/facebook.svg" alt="facebook" className='w-8 cursor-pointer' />
          <img src="/images/twitter.svg" alt="twitter" className='w-8 cursor-pointer' />
          <img src="/images/whatsapp.svg" alt="whatsapp" className='w-8 cursor-pointer' />
        </div>
      </div>
    </div>

    <Footer/>
    </div>
  
    
  ):<Loader/>
}

export default News
