import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { HomeSection } from './sections/HomeSection'
import { JobBoard } from './sections/JobBoard'
import { FreeForever } from './sections/FreeForever'

const App = () => {
  return (
    <>
    <Navbar />
    <HomeSection />
    <JobBoard />
    <FreeForever />
    </>
  )
}

export default App