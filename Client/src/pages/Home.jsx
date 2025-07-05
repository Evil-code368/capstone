import React from 'react'
import Header from '../component/Header'
import NewsList from '../component/NewsList' 
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
      <Header />
     
     <NewsList />
      {/* Main content goes here */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to The Six Sence</h2>
        <p>This is the home page content.</p>
      </div>
      <Footer />
    </>
  )
}

export default Home
