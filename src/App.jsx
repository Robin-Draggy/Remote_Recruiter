import React, { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { HomeSection } from './sections/HomeSection'
import { JobBoard } from './sections/JobBoard'
import { FreeForever } from './sections/FreeForever'
import { TalentSection } from './sections/TalentSection'
import { HelpSection } from './sections/HelpSection'
import { QuestionSection } from './sections/QuestionSection'
import { Footer } from './components/layout/Footer'
import Lenis from 'lenis'
import { ScrollToTop } from './components/ui/ScrollToTop'

const App = () => {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
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


    {/* <ScrollToTop /> */}
    </>
  )
}

export default App