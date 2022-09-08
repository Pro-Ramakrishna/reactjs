import React from 'react'
import Card from './Container/Card'
import Filter from './Container/Filter'
import Header from './Container/Header'
import Table from './Container/Table'

const Home = () => {
  return (
    <div>
       <Header/>
       <Table/>
       <Filter/>
       <Card/>
      
    </div>
  )
}

export default Home;
