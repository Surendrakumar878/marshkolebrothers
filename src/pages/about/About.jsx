import React from 'react'
import TopAbout from '../../components/aboutcomponent/TopAbout'
import HowDoes from '../../components/homecomponents/HowDoes'
import EventsGallery from '../../components/homecomponents/EventsGallery'
import BottomAbout from '../../components/aboutcomponent/BottomAbout'

const About = () => {
  return (
    <div>
      <TopAbout/>
      <EventsGallery/>
      <HowDoes/>
      <BottomAbout/>
    </div>
  )
}

export default About
