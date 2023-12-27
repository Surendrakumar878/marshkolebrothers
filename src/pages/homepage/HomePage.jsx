import React from 'react'
import Leanding from '../../components/homecomponents/Leanding'
import WeAreAssociated from '../../components/homecomponents/WeAreAssociated'
import AboutUs from '../../components/homecomponents/AboutUs'
import OurServerices from '../../components/homecomponents/OurServerices'
import OurBrands from '../../components/homecomponents/OurBrands'
import EventsGallery from '../../components/homecomponents/EventsGallery'
import WhyUs from '../../components/homecomponents/WhyUs'
import HowDoes from '../../components/homecomponents/HowDoes'

const HomePage = () => {
  return (
    <div>
    <Leanding/>
    <WeAreAssociated/>
    <AboutUs/>
    <OurServerices/>
    <OurBrands/>
    <EventsGallery/>
    <WhyUs/>
    <HowDoes/>


    </div>
  )
}

export default HomePage
