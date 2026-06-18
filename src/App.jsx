import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { HomeSection } from './sections/HomeSection'
import { JobBoard } from './sections/JobBoard'
import { FreeForever } from './sections/FreeForever'
import { TalentSection } from './sections/TalentSection'

const App = () => {
  return (
    <>
    <Navbar />
    <HomeSection />
    <JobBoard />
    <FreeForever />
    <TalentSection />
    </>
  )
}

export default App