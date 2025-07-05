import React, { useState } from 'react';
import { NewsCategories } from '../assets/assets';
import { motion } from 'motion/react';
import NewsCard from './NewsCard';
import { useAppContext } from '../context/App.Context';

const NewsList = () => {
  const [menu, setMenu] = useState('News');
  const { news, input } = useAppContext();

  const filteredNews = () => {
    if (input=== '') {
      return news
    }
    return blogs.filter((news)=> news.title.toLowerCase().includes(input.toLowerCase()) || news.category.toLowerCase().includes(input.toLowerCase()))
  }

  // Filter news based on the selected category
  return (
    <nav className="bg-blue-500 text-white-800 text-2xl">
      {/* Category Buttons */}
      <div className="flex justify-center items-center gap-4 py-4 mb-8">
        {NewsCategories.map((item) => (
          <div key={item} className="relative">
            <button onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 relative  ${
                menu === item && 'text-white px-4 pt-0.5'
              }`}
            >
              
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"/>)}
            </button>
          </div>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {filteredNews().filter((news) => menu === 'News'?true: news.category === menu).map((news)=><NewsCard key={news._id} news={news} />)}
      </div>
      </nav>
  
  );
};

export default NewsList;
