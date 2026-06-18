import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { HomeSection } from './sections/HomeSection'
import { JobBoard } from './sections/JobBoard'
import { FreeForever } from './sections/FreeForever'
import { TalentSection } from './sections/TalentSection'
import { HelpSection } from './sections/HelpSection'
import { QuestionSection } from './sections/QuestionSection'
import { Footer } from './components/layout/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <HomeSection />
    <JobBoard />
    <FreeForever />
    <TalentSection />
    <HelpSection />
    <QuestionSection />
    <Footer />
    </>
  )
}

export default App