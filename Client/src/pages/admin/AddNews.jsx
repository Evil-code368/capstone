import React, { useEffect, useState, useRef } from 'react'
import { assets, NewsCategories } from '../../assets/assets'
import Quill from 'quill';
import { useAppContext } from '../../context/App.Context';
import toast from 'react-hot-toast'



const AddNews = () => {


  const{axios} = useAppContext()
  const[isAdding, setIsAdding] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('');
   const [isPublished, setPublished] = useState(false);

   const generateContent = async(e)=>{

   }

   const onSubmitHandler = async (e) =>{
    try{
    e.preventDefault();
    setIsAdding(true)

    const news ={
      title, subTitle,
      description: quillRef.current.root.innerHTML,
      category, isPublished
      };

      const formData = new FormData();
      formData.append('news',JSON.stringify(news));
      formData.append('image',image);

      const {data} = await axios.post('/api/news/add',formData);

      if (data.success){
        toast.success(data.message);
        setImage(null);
        setTitle('');
        quillRef.current.root.innerHTML ='';
      }else{
        toast.error(data.message);
      
      }
   }catch(error){
      toast.error(error.message);
   }finally{
    setIsAdding(false);
    }

   }

useEffect(()=>{
  //Intiate Quill only once
  if(!quillRef.current && editorRef.current){quillRef.current =new Quill(editorRef.current,{theme:'snow'})
}
},[])

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
     <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>


     <p>Upload thumbnail</p>
     <label htmlFor="image">
      <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
      <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image'hidden required/>
     </label>

    <p className='mt-4'>News Title</p>
    <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'onChange={e=> setTitle(e.target.value)} value={title}/>

    <p className='mt-4'>Sub Title</p>
    <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'onChange={e=> setSubTitle(e.target.value)} value={subTitle}/>

    <p className='mt-4'>News Description</p>
    <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative '>
      <div ref={editorRef}></div>
      <button type ='button'onClick={generateContent} className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'>Gererate with AI</button>
    </div>


    <p className='mt-4'>News category</p>
    <select onChange={e => setCategory(e.target.value)} name="category" className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'>
      <option value="">Select category</option>
    
   {NewsCategories.map((item, index)=>{
        return <option key={index} value={item}>{item}</option>
      })} 
     
    </select>
    <div className='flex gap-2 mt-4'>
      <p>Publish Now</p>
      <input type='checkbox' checked={isPublished}className='scale-125 cursor-pointer'onChange={e =>setPublished(e.target.checked)}/>
    </div>
<button disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>{isAdding? 'Adding....': 'Add News'}</button>


     </div>
    </form>
  )
}

export default AddNews
