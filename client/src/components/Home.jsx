import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (query)=>{
    setSearchQuery(query)
  }
  const isDetail = false;
  return (
    <div>
      <Header isDetail={isDetail} onSearch={handleSearch}/>
      <Body searchQuery={ searchQuery }/>
      <Footer />
    </div>
  )
}

export default Home